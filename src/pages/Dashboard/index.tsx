import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { Container, Content, SearchArea } from './styles';
import { IState } from '../../store';

import { Movie } from '../../store/modules/movies/types';
import CarouselComponent from '../../components/Carousel';
import {
  loadActionMovies,
  loadAdventureMovies,
  loadCommedyMovies,
  loadDramaMovies,
  loadNetflixOriginals,
  loadTrendingMovies,
} from '../../store/modules/movies/actions';
import HeaderComponent from '../../components/Header';
import api from '../../services/api';
import Search from '../Search';
import Loader from '../../components/Loader';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState<Movie[] | null>([]);

  const myList = useSelector<IState, Movie[] | []>(
    state => state.movies.my_list,
  );

  const actionMovies = useSelector<IState, Movie[] | []>(
    state => state.movies.action_movies,
  );

  const adventureMovies = useSelector<IState, Movie[] | []>(
    state => state.movies.adventure_movies,
  );

  const commedyMovies = useSelector<IState, Movie[] | []>(
    state => state.movies.commedy_movies,
  );

  const dramaMovies = useSelector<IState, Movie[] | []>(
    state => state.movies.drama_movies,
  );

  const trendingMovies = useSelector<IState, Movie[] | []>(
    state => state.movies.trending_movies,
  );

  const loadNetflixOriginalsMedias = useSelector<IState, Movie[] | []>(
    state => state.movies.netflix_originals,
  );

  useEffect(() => {
    dispatch(loadActionMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAdventureMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadCommedyMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadDramaMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadTrendingMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadNetflixOriginals());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function searchMovies() {
      if (searchTerm !== '') {
        const response = await api.get(
          `/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${searchTerm}`,
        );

        setSearchResult(response.data.results);
      }
    }

    searchMovies();
  }, [searchTerm]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderComponent />
          <Content>
            <SearchArea>
              <FiSearch size={20} />
              <input
                name="search"
                type="text"
                placeholder="Títulos, gêneros ou pessoas"
                onChange={e => setSearchTerm(e.target.value)}
              />
            </SearchArea>

            {searchTerm !== '' ? (
              <Search movies={searchResult} />
            ) : (
              <>
                {myList.length > 0 && (
                  <CarouselComponent
                    category_title="Minha lista"
                    movies={myList}
                  />
                )}
                <CarouselComponent
                  category_title="Originais Wowflix"
                  movies={loadNetflixOriginalsMedias}
                />
                <CarouselComponent
                  category_title="Relevantes"
                  movies={trendingMovies}
                />
                <CarouselComponent
                  category_title="Ação"
                  movies={actionMovies}
                />
                <CarouselComponent
                  category_title="Aventura"
                  movies={adventureMovies}
                />
                <CarouselComponent
                  category_title="Comédia"
                  movies={commedyMovies}
                />
                <CarouselComponent
                  category_title="Drama"
                  movies={dramaMovies}
                />
              </>
            )}
          </Content>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
