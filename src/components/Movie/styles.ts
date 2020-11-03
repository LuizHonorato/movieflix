import styled from 'styled-components';

export const MovieContainer = styled.div`
  margin: 28px;
  display: flex;
`;

export const MovieContent = styled.div`
  height: 400px;
  width: 280px;
  cursor: pointer;

  img {
    width: 324px;
    height: 486px;
    border: none;
    transition: border 0.1s;
    -webkit-transition: border 0.05s;

    &:hover {
      border: 2px solid #fff;
      border-radius: 3px;
    }
  }
`;
