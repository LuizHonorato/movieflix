import React from 'react';
import Lottie from 'react-lottie';
import movieAnimation from '../../assets/animations/loader.json';

import { Container } from './styles';

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: movieAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default Loader;
