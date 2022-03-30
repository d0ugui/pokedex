import { useSelector } from 'react-redux';

import { PokemonItem } from '../PokemonItem';
import { Pagination } from '../Pagination';

import pokeSvg from '../../assets/icon-poke-red.svg';
import { Container, Content, Paginate } from './styles';

export function PokesList({ pokemons }) {
  const totalPokemons = useSelector((state) => state.pagination.totalPages);
  const searchPokemons = useSelector((state) => state.pokemons.searchPokemons);
  const favoriteMode = useSelector((state) => state.pokemons.favoriteMode);
  const favoritePokemons = useSelector((state) => state.pokemons.favoritePokemons);

  return (
    <Container>
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
        {searchPokemons ? (
          <PokemonItem key={searchPokemons.name} pokemon={searchPokemons} />
        ) : (
          pokemons?.map((pokemon) => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </Content>
    </Container>
  );
}
