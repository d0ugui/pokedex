import { useDispatch, useSelector } from 'react-redux';
import { selectedPokemon } from '../../features/pokemons';

import { Container, PokemonInfos } from './styles';

export function PokemonItem({ pokemon }) {
  const dispatch = useDispatch();
  const favoritePokemons = useSelector((state) => state.pokemons.favoritePokemons);
  const isSelected = favoritePokemons.includes(pokemon?.name);

  function handleSelectedPokemon(selected) {
    dispatch(selectedPokemon({ pokemon: selected }));
  }

  return (
    <Container
      onClick={() => handleSelectedPokemon(pokemon)}
      color={pokemon?.types[0].type.name}
      isSelected={isSelected}
    >
      <img src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon?.name} />
      <small>
        #
        {pokemon?.id}
      </small>

      <PokemonInfos>
        <strong>{pokemon?.name}</strong>
        <img
          src={`${pokemon?.types[0].type.name}.svg`}
          alt={pokemon?.types[0].type.name}
        />
      </PokemonInfos>

    </Container>
  );
}
