import { Reducer } from 'redux';
import { IUserState } from './types';

const INITIAL_STATE: IUserState = {
  user: null,
};

const auth: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      return {
        ...state,
        user: { ...action.payload.user },
      };
    }
    case 'SIGNIN': {
      return {
        ...state,
        user: { ...state.user, is_online: true },
      };
    }

    case 'UPDATE_USER': {
      return {
        ...state,
        user: { ...action.payload.user },
      };
    }

    case 'LOAD_USER': {
      return {
        ...state,
        user: { ...action.payload.user },
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        user: { ...state.user, is_online: false },
      };
    }

    default: {
      return state;
    }
  }
};

export default auth;
