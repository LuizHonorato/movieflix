import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
import avatarImg from '../../assets/avatar-movie-flix.png';
import { logout } from '../../store/modules/auth/actions';
import { IState } from '../../store';

const HeaderComponent: React.FC = () => {
  const user = useSelector<IState, User | null>(state => state.auth.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    localStorage.removeItem('@Movieflix:user');

    dispatch(logout());

    history.push('/');
  }, [history, dispatch]);

  return (
    <Header>
      <HeaderContent>
        <NavContent>
          <img src={logoImg} alt="Movieflix Logo" />
          <ul>
            <li>
              <Link to="/dashboard">Filmes</Link>
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
                  <button type="button" onClick={logoutUser}>
                    Sair
                  </button>
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
