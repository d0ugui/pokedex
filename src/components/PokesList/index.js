import { useSelector } from 'react-redux';

import { PokemonItem } from '../PokemonItem';
import { Pagination } from '../Pagination';

import pokeSvg from '../../assets/icon-poke-red.svg';
import { Container, Content, Paginate } from './styles';

export function PokesList() {
  const totalPokemons = useSelector((state) => state.pagination.totalPages);
  const {
    favoriteMode, favoritePokemons, pokemons, isLoading,
  } = useSelector((state) => state.pokemons);

  return (
    <Container>
      {isLoading ? (
        <h1>Carregando conteúdo....</h1>
      ) : (
        <>
          <div>
            <img src={pokeSvg} alt="Pokebola Icon" />
            <Paginate>
              <strong>
                {favoriteMode ? (
                  favoritePokemons.length
                ) : (
                  totalPokemons * 12 - 2
                )}
                {' '}
                Pokémons
              </strong>
              <Pagination />
            </Paginate>
          </div>
          <Content>
            {pokemons && pokemons?.map((pokemon) => (
              <PokemonItem key={Math.random()} pokemon={pokemon} />
            ))}
          </Content>
        </>
      )}
    </Container>
  );
}
