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

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    a {
    text-decoration: none;
    color: #fff;
    transition: 0.2s all ease;

      &:hover {
        color: #E0E0E0;
      }
    }

    svg {
      color: #BF0001;
    }
  }
`;
