import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GrClose } from 'react-icons/gr';
import {
  Overlay, Container, Infos, Stats, PokemonImage, Types, ListInfo,
} from './styles';
import pokeSvg from '../../assets/img-pokeball.png';
import { removeSelectedPokemon } from '../../features/pokemons';

import powerRange from '../../services/powerRange';

export function Modal() {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemons.selectedPokemon);

  return ReactDOM.createPortal(
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
          <h3>Stats</h3>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <ListInfo key={stat.stat.name} color={powerRange(stat.base_stat)}>
                <strong>{stat.stat.name}</strong>
                <p>{stat.base_stat}</p>
              </ListInfo>
            ))}
          </ul>
        </Stats>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
