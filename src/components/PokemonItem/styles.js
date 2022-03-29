import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  transition: 0.3s all ease;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover, &:focus {
    transform: scale(1.03);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }
`;
