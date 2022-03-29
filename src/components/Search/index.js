import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Content } from './styles';

export function Search() {
  return (
    <Container>
      <Content>
        <h1>Select your Pokemon</h1>
        <div>
          <input type="text" placeholder="Digite o nome do pokemon" />
          <AiOutlineSearch size={24} />
        </div>
      </Content>
    </Container>
  );
}
