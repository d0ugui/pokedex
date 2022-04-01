import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #3F68C0;
  height: 10rem;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  a {
    img {
      width: 16rem;
      height: 6rem;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

   button {
    border: none;
    background: transparent;
    text-decoration: none;
    color: #fff;
    transition: 0.2s all ease;
    text-align: center;

    cursor: pointer;

    &:hover {
      color: #E0E0E0;
    }
   }

    svg {
      color: #E94F37;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 2rem;
  }
`;
