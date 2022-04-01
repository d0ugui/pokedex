import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ color }) => (color ? `var(--${color})` : '#fff')};

  & > img {
    width: 250px;
  }

  h1 {
    text-transform: capitalize;
  }

  img.fixed {
    position: absolute;
    top: -5rem;
    left: -10rem;
  }

  svg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
`;

export const PokemonImage = styled.img`
  width: 15rem;
  height: 20rem;
`;

export const Infos = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Types = styled.div`
  display: flex;
  align-items: center;

  img + img {
    margin-left: 1rem;
  }
`;

export const Stats = styled.div`
  margin-top: 2rem;
  width: 100%;

  ul {
    list-style: none;
    margin-top: 1rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        text-transform: capitalize;
      }
    }
  }
`;

export const ListInfo = styled.li`
  p {
    color: ${({ color }) => color && color};
    font-weight: 700;
  }
`;
