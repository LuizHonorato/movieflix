import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { IUserState } from './modules/auth/types';
import { IMoviesState } from './modules/movies/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  auth: IUserState;
  movies: IMoviesState;
}

const middlewares = [promise, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
