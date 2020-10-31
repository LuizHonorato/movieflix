import React from 'react';

import { Movie, MovieContent } from './styles';

interface MovieProps {
  poster_path?: string;
  title: string;
}

const MovieComponent: React.FC<MovieProps> = ({ poster_path, title }) => {
  console.log(title);
  return (
    <Movie>
      <MovieContent>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
      </MovieContent>
    </Movie>
  );
};

export default MovieComponent;
