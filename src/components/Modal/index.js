import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GrClose } from 'react-icons/gr';
import {
  Overlay, Container, Infos, Stats,
} from './styles';
import pokeSvg from '../../assets/img-pokeball.png';
import { removeSelectedPokemon } from '../../features/pokemons';

export function Modal() {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemons.selectedPokemon);

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <img
          src={selectedPokemon?.sprites.other.dream_world.front_default}
          alt={selectedPokemon.name}
        />
        <img className="fixed" src={pokeSvg} alt="PokeBola" />
        <GrClose size={24} onClick={() => dispatch(removeSelectedPokemon())} />
        <Infos>
          <h1>{selectedPokemon?.name}</h1>
          <img src={`${selectedPokemon?.types[0].type.name}.svg`} alt={selectedPokemon?.types[0].type.name} />
        </Infos>
        <Stats>
          <h3>Stats</h3>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <li>
                <strong>{stat.stat.name}</strong>
                <p>{stat.base_stat}</p>
              </li>
            ))}
          </ul>
        </Stats>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
