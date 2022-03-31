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

  & > form {
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

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
`;
