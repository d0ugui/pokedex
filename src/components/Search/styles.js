import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #E6E6EA;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 50px auto;

  & > div {
    background-color: #fff;
    padding: 15px 25px;
    border-radius: 12.2rem;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 420px;

    input {
      width: 100%;
      padding: 5px;
      border: none;
      outline: none;
    }
  }
`;
