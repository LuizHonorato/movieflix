import { Reducer } from 'redux';
import { IUserState } from './types';

const INITIAL_STATE: IUserState = {
  user: null,
};

const auth: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGNIN': {
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

    default: {
      return state;
    }
  }
};

export default auth;
