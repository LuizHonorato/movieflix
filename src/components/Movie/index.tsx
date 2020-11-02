import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../store/modules/movies/types';

import { MovieContainer, MovieContent } from './styles';

interface MovieProps {
  movie: Movie;
}

const MovieComponent: React.FC<MovieProps> = ({ movie }) => {
  return (
    <MovieContainer>
      <Link
        to={{
          pathname: '/details',
          state: { movie },
        }}
      >
        <MovieContent>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
          />
        </MovieContent>
      </Link>
    </MovieContainer>
  );
};

export default MovieComponent;
