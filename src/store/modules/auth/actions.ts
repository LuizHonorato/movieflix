import { User } from './types';

export function loadUser(user: User): object {
  return {
    type: 'LOAD_USER',
    payload: {
      user,
    },
  };
}

export function signUp(user: User): object {
  return {
    type: 'SIGNUP',
    payload: {
      user,
    },
  };
}

export function signIn(user: User): object {
  return {
    type: 'SIGNIN',
    payload: {
      user,
    },
  };
}

export function updateUser(user: User): object {
  return {
    type: 'UPDATE_USER',
    payload: {
      user,
    },
  };
}

export function logout(): object {
  return {
    type: 'LOGOUT',
  };
}
