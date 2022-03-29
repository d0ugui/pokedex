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
`;

export const Content = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
