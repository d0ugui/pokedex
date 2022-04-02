import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 112rem;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 3rem;
  }

  h1 {
    margin-top: 2rem;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 2rem;
  }

`;

export const Content = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Paginate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
