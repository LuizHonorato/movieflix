import { Reducer } from 'redux';
import { IMoviesState } from './types';

const INITIAL_STATE: IMoviesState = {
  my_list: [],
  action_movies: [],
  adventure_movies: [],
  commedy_movies: [],
  drama_movies: [],
  trending_movies: [],
  netflix_originals: [],
};

const movies: Reducer<IMoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_NETFLIX_ORIGINALS': {
      return {
        ...state,
        netflix_originals: [
          ...state.netflix_originals,
          ...action.payload.data.results,
        ],
      };
    }
    case 'LOAD_TRENDING_MOVIES': {
      return {
        ...state,
        trending_movies: [
          ...state.trending_movies,
          ...action.payload.data.results,
        ],
      };
    }
    case 'LOAD_ACTION_MOVIES': {
      return {
        ...state,
        action_movies: [...state.action_movies, ...action.payload.data.results],
      };
    }
    case 'LOAD_ADVENTURE_MOVIES': {
      return {
        ...state,
        adventure_movies: [
          ...state.adventure_movies,
          ...action.payload.data.results,
        ],
      };
    }
    case 'LOAD_COMMEDY_MOVIES': {
      return {
        ...state,
        commedy_movies: [
          ...state.commedy_movies,
          ...action.payload.data.results,
        ],
      };
    }
    case 'LOAD_DRAMA_MOVIES': {
      return {
        ...state,
        drama_movies: [...state.drama_movies, ...action.payload.data.results],
      };
    }
    default: {
      return state;
    }
  }
};

export default movies;
