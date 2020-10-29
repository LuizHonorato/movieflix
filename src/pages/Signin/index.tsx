import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './styles';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { signIn } from '../../store/modules/auth/actions';
import { User } from '../../store/modules/auth/types';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (data: User) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const userStoraged = localStorage.getItem('@Wowflix:user');

        if (userStoraged) {
          const user = JSON.parse(userStoraged);

          if (data.password === user.password) {
            dispatch(signIn(user));
          } else {
            throw new Error('Email e/ou senha incorretos');
          }
        } else {
          throw new Error('Usuário não cadastrado');
        }

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: err.message,
        });
      }
    },
    [addToast, dispatch, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Logo Wowflix" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Ainda não tem uma conta? Cadastre-se
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signin;
