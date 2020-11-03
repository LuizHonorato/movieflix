import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, AnimationContainer } from './styles';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { signUp } from '../../store/modules/auth/actions';
import { IState } from '../../store';
import { User } from '../../store/modules/auth/types';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  is_online: boolean;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const user = useSelector<IState, User | null>(state => state.auth.user);
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (user) {
          if (user.email === data.email) {
            throw new Error('Usuário já cadastrado!');
          }
        }

        dispatch(signUp(data));

        history.push('/');

        addToast({
          type: 'success',
          title: 'Usuário cadastrado com sucesso',
          description: 'Faça login para encontrar seus filmes favoritos!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na inscrição',
          description: err.message,
        });
      }
    },
    [addToast, history, user, dispatch],
  );

  return (
    <Container>
      <AnimationContainer>
        <img src={logoImg} alt="Logo Wowflix" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Venha e pegue sua pipoca</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para logon
        </Link>
      </AnimationContainer>
    </Container>
  );
};

export default Signup;
