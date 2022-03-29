import { Container } from './styles';
import pokeTest from '../../assets/teste.svg';
import fireTest from '../../assets/fire.svg';

export function PokemonItem() {
  return (
    <Container>
      <img src={pokeTest} alt="Pokemon Name" />
      <small>#004</small>
      <div>
        <strong>Charmander</strong>
        <img src={fireTest} alt="Fire" />
      </div>
    </Container>
  );
}
