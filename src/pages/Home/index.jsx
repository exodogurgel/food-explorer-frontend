import { Container, Content, Slogan } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import coverPhoto from '../../assets/cover-photo.png';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import plate1 from '../../assets/plate-1.png';

export function Home() {

  return (
      <Container>
        <Header />
        <Content>
          <Slogan>
            <img src={coverPhoto} alt="cover photo" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Slogan>
          <Section title="Pratos principais">
            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>
          </Section>

          <Section title="Sobremesas">
            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>

            <Card data={{
              id: 1,
              title: "Salada Ravanello",
              image: plate1,
              description: "Rabanettes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,90"
            }}/>
          </Section>
        </Content>
        <Footer />

      </Container>
  )
}