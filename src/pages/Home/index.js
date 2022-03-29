import { Header } from '../../components/Header';
import { PokesList } from '../../components/PokesList';
import { Search } from '../../components/Search';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Search />
      <PokesList />
    </Container>
  );
}

export default Home;
