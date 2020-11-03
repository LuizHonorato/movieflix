export interface Movie {
  poster_path?: string;
  overview: string;
  id: number;
  name: string;
  release_date: Date;
  vote_average: number;
  backdrop_path: string;
  is_favorite: boolean;
}

export interface IMoviesState {
  my_list: Movie[];
  action_movies: Movie[];
  adventure_movies: Movie[];
  commedy_movies: Movie[];
  drama_movies: Movie[];
  trending_movies: Movie[];
  netflix_originals: Movie[];
}
