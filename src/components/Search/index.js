import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { searchPokemons } from '../../features/pokemons';

import { getUniquePokemon } from '../../services/pokemons';
import { Container, Content } from './styles';

export function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  async function handleSearch() {
    if (!search) {
      dispatch(searchPokemons({ res: null }));
    }

    const res = await getUniquePokemon(search);
    dispatch(searchPokemons({ res }));
  }

  return (
    <Container>
      <Content>
        <h1>Select your Pokemon</h1>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite o nome do pokemon"
          />
          <button onClick={handleSearch}>
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </Content>
    </Container>
  );
}
