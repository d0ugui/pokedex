import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 4rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  transition: 0.3s all ease;
  margin-bottom: 4rem;

  small {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  img:nth-child(1) {
    width: 15rem;
    height: 20rem;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      text-transform: capitalize;
    }

  }

  &:hover, &:focus {
    transform: scale(1.03);
    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
