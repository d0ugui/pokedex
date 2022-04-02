import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { settingPokemons, setIsLoading } from '../../features/pokemons';

import { getPokemons, getUniquePokemon } from '../../services/pokemons';

import delay from '../../utils/delay';
import { Container, Content } from './styles';

export function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { perPage, currentPage } = useSelector((state) => state.pagination);

  async function handleSearch(e) {
    e.preventDefault();

    if (!search) {
      dispatch(setIsLoading(true));
      await delay(1000);
      const { res } = await getPokemons(perPage, perPage * currentPage);
      dispatch(settingPokemons({ pokemons: res }));
      dispatch(setIsLoading(false));
      return;
    }

    dispatch(setIsLoading(true));
    await delay(1000);

    const res = Array(await getUniquePokemon(search));

    if (res[0]) {
      dispatch(settingPokemons({ pokemons: res }));
    }

    dispatch(setIsLoading(false));
  }

  return (
    <Container>
      <Content>
        <h1>Select your Pokemon</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite o nome do pokemon"
          />
          <button type="submit" onClick={handleSearch} aria-label="search">
            <AiOutlineSearch size={24} />
          </button>
        </form>
      </Content>
    </Container>
  );
}
