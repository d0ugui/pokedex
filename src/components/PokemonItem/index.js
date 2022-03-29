import { Container } from './styles';
// import fireTest from '../../assets/fire.svg';

export function PokemonItem({ pokemon }) {
  return (
    <Container>
      <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon Name" />
      <small>
        #
        {pokemon.id}
      </small>
      <div>
        <strong>{pokemon.name}</strong>
        <img src={`${pokemon.types[0].type.name}.svg`} alt={pokemon.types[0].type.name} />
      </div>
    </Container>
  );
}
