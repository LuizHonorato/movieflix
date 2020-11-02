import { User } from './types';

export function loadUser(user: User): object {
  return {
    type: 'LOAD_USER',
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
