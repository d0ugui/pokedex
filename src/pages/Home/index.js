import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settingPokemons } from '../../features/pokemons';
import { settingTotalPages } from '../../features/pagination';
import { getPokemons, getPokemonInfos } from '../../services/pokemons';

import { Header } from '../../components/Header';
import { PokesList } from '../../components/PokesList';
import { Search } from '../../components/Search';

import { Container } from './styles';

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const perPage = useSelector((state) => state.pagination.perPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  useEffect(async () => {
    const { data } = await getPokemons(perPage, perPage * currentPage);
    const promises = await data.results.map(async (pokemon) => (
      getPokemonInfos(pokemon.url)
    ));

    const res = await Promise.all(promises);

    dispatch(settingPokemons({ pokemons: res }));
    dispatch(settingTotalPages({ total: data.count }));
  }, [currentPage]);

  return (
    <Container>
      <Header />
      <Search />
      <PokesList pokemons={pokemons} />
    </Container>
  );
}

export default Home;
