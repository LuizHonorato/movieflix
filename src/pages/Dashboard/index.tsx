import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  AvatarArea,
  Dropdown,
  DropdownContent,
} from './styles';
import { User } from '../../store/modules/auth/types';
import { IState } from '../../store';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar-wow-flix.png';

const Dashboard: React.FC = () => {
  const user = useSelector<IState, User | null>(state => state.auth.user);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Wowflix Logo" />
          <ul>
            <li>
              <Link to="/dashboard">Filmes</Link>
            </li>
            <li>
              <Link to="/my-list">Minha lista</Link>
            </li>
          </ul>
          <AvatarArea>
            <Dropdown>
              <img src={avatarImg} alt="Avatar" />
              <DropdownContent>
                <ul>
                  <li>
                    <div>
                      <span>Bem-vindo,</span>
                      <strong>{user?.name}</strong>
                    </div>
                  </li>
                  <li>
                    <Link to="/profile">Minha conta</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Planos</Link>
                  </li>
                  <li>
                    <Link to="/my-list">Sair</Link>
                  </li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </AvatarArea>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
