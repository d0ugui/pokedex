import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { addFavPokemon, removeFavPokemon } from '../../features/pokemons';

import { Container } from './styles';

export function PokemonItem({ pokemon }) {
  const dispatch = useDispatch();
  const favoritePokemons = useSelector((state) => state.pokemons.favoritePokemons);
  const isSelected = favoritePokemons.includes(pokemon?.name);

  return (
    <Container>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt="Pokemon Name" />
      <small>
        #
        {pokemon?.id}
      </small>

      {isSelected ? (
        <button
          onClick={() => dispatch(removeFavPokemon({ fav: pokemon }))}
          aria-label="remove favorite"
        >
          <AiFillHeart
            size={20}
            color="#E94F37"
          />
        </button>
      ) : (
        <button
          onClick={() => dispatch(addFavPokemon({ fav: pokemon }))}
          aria-label="add favorite"
        >
          <AiFillHeart
            size={20}
          />
        </button>
      )}

      <div>
        <strong>{pokemon?.name}</strong>
        {pokemon?.types && <img src={`${pokemon?.types[0].type.name}.svg`} alt={pokemon?.types[0].type.name} />}
      </div>
    </Container>
  );
}
