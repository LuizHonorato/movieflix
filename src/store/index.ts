import { createStore } from 'redux';
import { IUserState } from './modules/auth/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  auth: IUserState;
}

const store = createStore(rootReducer);

export default store;
