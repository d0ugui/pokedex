import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { settingPokemons } from '../../features/pokemons';

import { getPokemons, getUniquePokemon } from '../../services/pokemons';
import { Container, Content } from './styles';

export function Search() {
  const dispatch = useDispatch();
  const { perPage, currentPage } = useSelector((state) => state.pagination);
  const [search, setSearch] = useState('');

  async function handleSearch(e) {
    e.preventDefault();

    if (!search) {
      const { res } = await getPokemons(perPage, perPage * currentPage);
      dispatch(settingPokemons({ pokemons: res }));
      return;
    }

    const res = Array(await getUniquePokemon(search));

    if (res[0]) {
      dispatch(settingPokemons({ pokemons: res }));
    }
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
