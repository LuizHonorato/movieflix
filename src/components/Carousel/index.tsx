import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Movie } from '../../store/modules/movies/types';
import MovieComponent from '../Movie';
import { CarouselMain, Title } from './styles';

interface CarouselProps {
  category_title: string;
  movies: Movie[];
}

const CarouselComponent: React.FC<CarouselProps> = ({
  category_title,
  movies,
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <CarouselMain>
      <Title>{category_title}</Title>
      <Carousel
        containerClass="carousel-container"
        itemClass="carousel-item"
        swipeable={false}
        draggable={false}
        keyBoardControl
        responsive={responsive}
      >
        {movies.map(movie => (
          <MovieComponent
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </Carousel>
    </CarouselMain>
  );
};

export default CarouselComponent;
