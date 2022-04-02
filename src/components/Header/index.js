import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineAppstore } from 'react-icons/ai';
import { getFavoritePokemons, getPokemons } from '../../services/pokemons';
import { setFavorites, settingPokemons } from '../../features/pokemons';

import logoSvg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  const dispatch = useDispatch();
  const { perPage, currentPage } = useSelector((state) => state.pagination);
  const { favoritePokemons, favoriteMode } = useSelector((state) => state.pokemons);

  async function handleFavorites() {
    if (!favoriteMode) {
      const res = await getFavoritePokemons(favoritePokemons);
      dispatch(setFavorites());
      dispatch(settingPokemons({ pokemons: res }));
      return;
    }

    const { res } = await getPokemons(perPage, perPage * currentPage);
    dispatch(setFavorites());
    dispatch(settingPokemons({ pokemons: res }));
  }

  return (
    <Container>
      <Content>
        <a href="/">
          <img src={logoSvg} alt="Pokemon Logo" />
        </a>
        {favoriteMode ? (
          <div>
            <button onClick={handleFavorites} aria-label="meus favoritos">
              Todos os pokemons
            </button>
            <AiOutlineAppstore size={20} />
          </div>
        ) : (
          <div>
            <button onClick={handleFavorites} aria-label="meus favoritos">
              Meus favoritos
            </button>
            <AiFillHeart size={20} />
          </div>
        )}
      </Content>
    </Container>
  );
}
