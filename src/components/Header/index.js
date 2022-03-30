import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { Container, Content } from './styles';
import logoSvg from '../../assets/logo.svg';
import { getFavoritePokemons, getPokemons } from '../../services/pokemons';
import { setFavorites, settingPokemons } from '../../features/pokemons';

export function Header() {
  const dispatch = useDispatch();
  const favsPokemons = useSelector((state) => state.pokemons.favoritePokemons);
  const favoriteMode = useSelector((state) => state.pokemons.favoriteMode);
  const perPage = useSelector((state) => state.pagination.perPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  async function handleFavorites() {
    if (!favoriteMode) {
      const res = await getFavoritePokemons(favsPokemons);
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
        <img src={logoSvg} alt="Pokemon Logo" />
        <div>
          <button onClick={handleFavorites}>
            Meus favoritos
          </button>
          <AiFillHeart size={20} />
        </div>
      </Content>
    </Container>
  );
}
