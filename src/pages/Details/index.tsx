import React, { useCallback, useEffect, useState } from 'react';
import { FaCheck, FaPlay, FaPlus } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { IState } from '../../store';
import {
  addMovieToMyList,
  removeMovieFromMyList,
} from '../../store/modules/movies/actions';
import { Movie } from '../../store/modules/movies/types';

import {
  Container,
  Title,
  ActionArea,
  PlayButton,
  AddToMyList,
  Content,
  Background,
  GoBack,
} from './styles';

interface LocationProps {
  movie: Movie;
}

const Details: React.FC = () => {
  const location = useLocation<LocationProps>();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const relevancy = `${location.state.movie.vote_average * 10}%`;

  const myList = useSelector<IState, Movie[] | []>(
    state => state.movies.my_list,
  );

  useEffect(() => {
    if (myList.length > 0) {
      myList.forEach(movie => {
        if (movie.id === location.state.movie.id) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      });
    } else {
      setIsFavorite(false);
    }
  }, [myList, location]);

  const hadleAddMovieToMyList = useCallback(
    (movie: Movie) => {
      dispatch(addMovieToMyList(movie));
    },
    [dispatch],
  );

  const handleRemoveMovieFromMyList = useCallback(
    (movie: Movie) => {
      dispatch(removeMovieFromMyList(movie));
    },
    [dispatch],
  );

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <Content>
        <GoBack>
          <FiArrowLeft onClick={goBack} color="#fff" />
        </GoBack>
        <Title>{location.state.movie.name}</Title>
        <span>
          Relevância:
          {relevancy}
        </span>
        <span>
          Data de lançamento:
          {location.state.movie.release_date
            ? location.state.movie.release_date
            : ' Em breve'}
        </span>
        <p>{location.state.movie.overview}</p>
        <ActionArea>
          <PlayButton>
            <FaPlay color="#fff" />
            Começar
          </PlayButton>
          <AddToMyList
            onClick={() =>
              isFavorite
                ? handleRemoveMovieFromMyList(location.state.movie)
                : hadleAddMovieToMyList(location.state.movie)
            }
          >
            {isFavorite ? <FaCheck color="#fff" /> : <FaPlus color="#fff" />}
            {isFavorite ? 'Remover da lista' : 'Minha lista'}
          </AddToMyList>
        </ActionArea>
      </Content>
      <Background
        poster_path={`https://image.tmdb.org/t/p/original/${location.state.movie.poster_path}`}
      />
    </Container>
  );
};

export default Details;
