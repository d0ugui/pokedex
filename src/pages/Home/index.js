import { useState, useEffect } from 'react';
import { getPokemons, getPokemonInfos } from '../../services/pokemons';

import { Header } from '../../components/Header';
import { PokesList } from '../../components/PokesList';
import { Search } from '../../components/Search';

import { Container } from './styles';

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const { data } = await getPokemons();
    const promises = await data.results.map(async (pokemon) => (
      getPokemonInfos(pokemon.url)
    ));

    const res = await Promise.all(promises);

    setPokemons(res);
  }, []);

  return (
    <Container>
      <Header />
      <Search />
      {console.log(pokemons)}
      <PokesList pokemons={pokemons} />
    </Container>
  );
}

export default Home;
