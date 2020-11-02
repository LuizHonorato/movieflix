import { shade } from 'polished';
import styled from 'styled-components';

interface BackgroundProps {
  poster_path: string;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 16px;
  width: 100%;
  max-width: 600px;

  span {
    color: rgb(92, 223, 92);
    font-size: 20px;
    margin-top: 16px;
  }

  span + span {
    color: #fff;
  }

  p {
    margin-top: 16px;
    line-height: 24px;
    font-size: 18px;
  }
`;

export const GoBack = styled.div`
  position: relative;
  top: -100px;

  svg {
    font-size: 32px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
`;
export const ActionArea = styled.div`
  display: flex;
  margin-top: 16px;
  width: 70%;

  button + button {
    margin-left: 8px;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e50914;
  height: 48px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  transition: background-color 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background: ${shade(0.2, '#e50914')};
  }
`;
export const AddToMyList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  height: 48px;
  border: 1px solid #fff;
  padding: 0 16px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  transition: background-color 0.2s;

  svg {
    margin-right: 8px;
  }
`;

export const BackgroundArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Background = styled.div<BackgroundProps>`
  flex: 1;
  background: url(${props => props.poster_path}) no-repeat center;
  background-size: cover;
  width: 780px;
`;
