import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settingPokemons, storagePokemons } from '../../features/pokemons';
import { settingTotalPages } from '../../features/pagination';
import { getPokemons } from '../../services/pokemons';

import { Header } from '../../components/Header';
import { PokesList } from '../../components/PokesList';
import { Search } from '../../components/Search';

import { Container } from './styles';
import { Modal } from '../../components/Modal';

function Home() {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.pagination.perPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const selectedPokemon = useSelector((state) => state.pokemons.selectedPokemon);

  useLayoutEffect(() => {
    const favoritePokesStorage = JSON.parse(window.localStorage.getItem('favPokes'));

    if (favoritePokesStorage) {
      dispatch(storagePokemons({ storageFavs: favoritePokesStorage }));
    }
  }, []);

  useEffect(async () => {
    const { res, count } = await getPokemons(perPage, perPage * currentPage);

    dispatch(settingPokemons({ pokemons: res }));
    dispatch(settingTotalPages({ total: count }));
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
