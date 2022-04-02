import { useEffect, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { settingPokemons, storagePokemons, setIsLoading } from '../../features/pokemons';
import { settingTotalPages } from '../../features/pagination';
import { getPokemons } from '../../services/pokemons';

import { Header } from '../../components/Header';
import { PokesList } from '../../components/PokesList';
import { Search } from '../../components/Search';
import { Modal } from '../../components/Modal';

import delay from '../../utils/delay';

import { Container } from './styles';

function Home() {
  const dispatch = useDispatch();
  const { perPage, currentPage } = useSelector((state) => state.pagination);
  const selectedPokemon = useSelector((state) => state.pokemons.selectedPokemon);

  useLayoutEffect(() => {
    const favoritePokesStorage = JSON.parse(window.localStorage.getItem('favPokes'));

    if (favoritePokesStorage) {
      dispatch(storagePokemons({ storageFavs: favoritePokesStorage }));
    }
  }, []);

  useEffect(async () => {
    dispatch(setIsLoading(true));
    await delay();
    const { res, count } = await getPokemons(perPage, perPage * currentPage);

    dispatch(settingPokemons({ pokemons: res }));
    dispatch(settingTotalPages({ total: count }));
    dispatch(setIsLoading(false));
  }, [currentPage]);

  return (
    <Container>
      <Header />
      <Search />
      <PokesList />
      {selectedPokemon && <Modal />}
    </Container>
  );
}

export default Home;
