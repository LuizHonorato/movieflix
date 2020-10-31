import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

import {
  Container,
  Header,
  HeaderContent,
  NavContent,
  AvatarArea,
  Dropdown,
  DropdownContent,
  Content,
} from './styles';
import { User } from '../../store/modules/auth/types';
import { IState } from '../../store';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar-wow-flix.png';
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

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector<IState, User | null>(state => state.auth.user);
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

  return (
    <Container>
      <Header>
        <HeaderContent>
          <NavContent>
            <img src={logoImg} alt="Wowflix Logo" />
            <ul>
              <li>
                <Link to="/dashboard">Filmes</Link>
              </li>
              <li>
                <Link to="/dashboard">Séries</Link>
              </li>
              <li>
                <Link to="/my-list">Minha lista</Link>
              </li>
            </ul>
          </NavContent>
          <AvatarArea>
            <Dropdown>
              <img src={avatarImg} alt="Avatar" />
              <DropdownContent>
                <ul>
                  <li>
                    <div>
                      <span>Bem-vindo,</span>
                      <strong>{user?.name}</strong>
                    </div>
                  </li>
                  <li>
                    <Link to="/profile">Minha conta</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Planos</Link>
                  </li>
                  <li>
                    <Link to="/my-list">Sair</Link>
                  </li>
                </ul>
              </DropdownContent>
            </Dropdown>
            <AiFillCaretDown />
          </AvatarArea>
        </HeaderContent>
      </Header>
      <Content>
        <CarouselComponent
          category_title="Originais Wowflix"
          movies={loadNetflixOriginalsMedias}
        />
        <CarouselComponent
          category_title="Relevantes"
          movies={trendingMovies}
        />
        <CarouselComponent category_title="Ação" movies={actionMovies} />
        <CarouselComponent category_title="Aventura" movies={adventureMovies} />
        <CarouselComponent category_title="Comédia" movies={commedyMovies} />
        <CarouselComponent category_title="Drama" movies={dramaMovies} />
      </Content>
    </Container>
  );
};

export default Dashboard;
