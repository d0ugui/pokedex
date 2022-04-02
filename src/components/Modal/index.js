import { GrClose } from 'react-icons/gr';
import { AiFillHeart } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedPokemon, removeFavPokemon, addFavPokemon } from '../../features/pokemons';

import powerRange from '../../services/powerRange';

import pokeSvg from '../../assets/img-pokeball.png';
import {
  Overlay,
  Container,
  Infos,
  Stats,
  PokemonImage,
  Types,
  ListInfo,
  Favorite,
} from './styles';

export function Modal() {
  const dispatch = useDispatch();
  const { selectedPokemon, favoritePokemons } = useSelector((state) => state.pokemons);
  const isSelected = favoritePokemons.includes(selectedPokemon?.name);

  return (
    <Overlay>
      <Container color={selectedPokemon?.types[0].type.name}>
        <PokemonImage
          src={selectedPokemon?.sprites.other.dream_world.front_default}
          alt={selectedPokemon.name}
        />
        <img className="fixed" src={pokeSvg} alt="PokeBola" />
        <GrClose size={24} onClick={() => dispatch(removeSelectedPokemon())} />

        <Infos>
          <h1>{selectedPokemon?.name}</h1>

          <Types>
            {selectedPokemon?.types.map((type) => (
              type.type.name !== 'flying' && <img key={type.type.name} src={`${type.type.name}.svg`} alt={type.type.name} />
            ))}
          </Types>

        </Infos>
        <Stats>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <ListInfo key={stat.stat.name} color={powerRange(stat.base_stat)}>
                <strong>{stat.stat.name}</strong>
                <p>{stat.base_stat}</p>
              </ListInfo>
            ))}
          </ul>
        </Stats>

        <Favorite isSelected={isSelected}>
          {isSelected ? (
            <button
              onClick={() => dispatch(removeFavPokemon({ fav: selectedPokemon }))}
              aria-label="remove favorite"
            >
              Remover dos favoritos
              <AiFillHeart
                size={24}
              />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addFavPokemon({ fav: selectedPokemon }))}
              aria-label="add favorite"
            >
              Adicionar aos favoritos
              <AiFillHeart
                size={24}
              />
            </button>
          )}
        </Favorite>
      </Container>
    </Overlay>
  );
}
