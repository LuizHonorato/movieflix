import styled from 'styled-components';

export const CarouselMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1070px;
  margin: 0 auto;
  margin-bottom: 32px;

  .carousel-container {
    width: 100%;
  }

  .carousel-container ul li {
    width: 340px !important;

    div {
      width: 100%;
    }
  }

  .carousel-container ul li div {
    margin: 0 !important;
  }

  .carousel-item {
    width: 324px;
    height: 486px;
  }
`;

export const Title = styled.h1`
  padding-top: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;
