import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Logo" />
          <span>food explorer</span>
        </div>
        <p>© 2022 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}