import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { User } from '../../store/modules/auth/types';
import {
  Header,
  HeaderContent,
  NavContent,
  AvatarArea,
  Dropdown,
  DropdownContent,
} from './styles';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar-wow-flix.png';
import { IState } from '../../store';

const HeaderComponent: React.FC = () => {
  const user = useSelector<IState, User | null>(state => state.auth.user);
  return (
    <Header>
      <HeaderContent>
        <NavContent>
          <img src={logoImg} alt="Wowflix Logo" />
          <ul>
            <li>
              <Link to="/dashboard">Filmes</Link>
            </li>
            <li>
              <Link to="/dashboard">Séries</Link>
            </li>
            <li>
              <Link to="/my-list">Minha lista</Link>
            </li>
          </ul>
        </NavContent>
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
          <AiFillCaretDown />
        </AvatarArea>
      </HeaderContent>
    </Header>
  );
};

export default HeaderComponent;
