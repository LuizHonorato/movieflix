import React from 'react';
import { useSelector } from 'react-redux';
import CarouselComponent from '../../components/Carousel';
import HeaderComponent from '../../components/Header';
import { IState } from '../../store';
import { Movie } from '../../store/modules/movies/types';
import { Container } from './styles';

const MyList: React.FC = () => {
  const myList: Movie[] = useSelector<IState, Movie[] | []>(
    state => state.movies.my_list,
  );

  return (
    <Container>
      <HeaderComponent />
      <CarouselComponent category_title="Minha lista" movies={myList} />
    </Container>
  );
};

export default MyList;
