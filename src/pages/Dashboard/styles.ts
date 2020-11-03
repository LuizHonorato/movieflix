import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1070px;
  margin: 0 auto;

  form {
    div {
      width: 30%;
    }
  }
`;

export const Content = styled.div``;

export const SearchArea = styled.div`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 30%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 80%;
    margin-left: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  &:hover {
    color: #fff;
    border-color: #fff;
  }

  svg {
    margin-right: 16px;
  }
`;
