import { Container, Content } from './styles';
import pokeSvg from '../../assets/icon-poke-red.svg';
import { PokemonItem } from '../PokemonItem';

export function PokesList() {
  return (
    <Container>
      <div>
        <img src={pokeSvg} alt="Pokebola Icon" />
        <strong>1120 Pokémons</strong>
      </div>
      <Content>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </Content>
    </Container>
  );
}
