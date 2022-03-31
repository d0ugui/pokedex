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

  background-color: ${({ color }) => (color ? `var(--${color})` : '#fff')};

  small {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-weight: 600;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background: transparent;

    svg {
      cursor: pointer;
      color: ${({ isSelected }) => (isSelected ? '#E94F37' : '#F18E7E')};
    }
  }

  & > img {
    width: 15rem;
    height: 20rem;
  }


  &:hover, &:focus {
    transform: scale(1.03);
    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
  }
`;

export const PokemonInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    text-transform: capitalize;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;
