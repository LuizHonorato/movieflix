import React from 'react';
import MovieComponent from '../../components/Movie';
import { Movie } from '../../store/modules/movies/types';
import { Container } from './styles';

interface SearchProps {
  movies: Movie[] | null;
}

const Search: React.FC<SearchProps> = ({ movies }) => {
  return (
    <Container>
      {movies?.map(
        movie =>
          movie.poster_path && <MovieComponent key={movie.id} movie={movie} />,
      )}
    </Container>
  );
};

export default Search;
