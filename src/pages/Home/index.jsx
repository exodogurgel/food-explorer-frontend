import { Container, Slogan } from './styles';
import { Header } from '../../components/Header';
import coverPhoto from '../../assets/cover-photo.png';

export function Home() {

  return (
      <Container>
        <Header />
        <Slogan>
          <img src={coverPhoto} alt="cover photo" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Slogan>

      </Container>
  )
}