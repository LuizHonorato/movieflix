import api from '../../../services/api';
import { Movie } from './types';

export function loadNetflixOriginals(): object {
  const response = api.get(
    `/discover/tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_networks=213`,
  );

  return {
    type: 'LOAD_NETFLIX_ORIGINALS',
    payload: response,
  };
}

export function loadTrendingMovies(): object {
  const response = api.get(
    `/trending/all/week?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`,
  );

  return {
    type: 'LOAD_TRENDING_MOVIES',
    payload: response,
  };
}

export function loadActionMovies(): object {
  const response = api.get(
    `discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=28`,
  );

  return {
    type: 'LOAD_ACTION_MOVIES',
    payload: response,
  };
}

export function loadAdventureMovies(): object {
  const response = api.get(
    `discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=12`,
  );

  return {
    type: 'LOAD_ADVENTURE_MOVIES',
    payload: response,
  };
}

export function loadCommedyMovies(): object {
  const response = api.get(
    `discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=35`,
  );

  return {
    type: 'LOAD_COMMEDY_MOVIES',
    payload: response,
  };
}

export function loadDramaMovies(): object {
  const response = api.get(
    `discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=18`,
  );

  return {
    type: 'LOAD_DRAMA_MOVIES',
    payload: response,
  };
}

export function addMovieToMyList(movie: Movie): object {
  return {
    type: 'ADD_MOVIE_TO_MY_LIST',
    payload: {
      movie,
    },
  };
}

export function removeMovieFromMyList(movie: Movie): object {
  return {
    type: 'REMOVE_MOVIE_FROM_MY_LIST',
    payload: {
      movie,
    },
  };
}
