import { AiFillHeart } from 'react-icons/ai';
import { Container, Content } from './styles';
import logoSvg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="Pokemon Logo" />
        <div>
          <a href="ww">Meus favoritos</a>
          <AiFillHeart size={20} />
        </div>
      </Content>
    </Container>
  );
}
