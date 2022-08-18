import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Content, ButtonBack, Form, SectionIngredients, InputWrapper } from "./styles";
import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { IngredientItem } from "../../components/IngredientItem";

export function Edit() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />
      {
        user.isAdmin &&
        <Content>
          <ButtonBack>
            <Link to="/"> <FiChevronLeft size={30}/>Voltar</Link>
          </ButtonBack>

          <Form>
            <header>
              <legend>Editar prato</legend>
            </header>

            <InputWrapper>
              <div className="smallBox">
                <label id="file" htmlFor="image">
                  Imagem do prato
                  <div>
                    <FiUpload size={24}/>
                    <span>Selecione a imagem</span>
                    <input id="image" type="file"/>
                  </div>
                </label>
              </div>
              <Input label="name" title="Nome do prato" type="text" placeholder="Ex.: Salada Ceasar "/>
            </InputWrapper>

            <InputWrapper>
              <SectionIngredients>
                <span>Ingredientes</span>
                <div>
                  <IngredientItem value="Teste"/>
                  <IngredientItem isNew placeholder="Adicionar"/>
                </div>
              </SectionIngredients>
              <div className="smallBox">
                <Input label="price" title="Preço" type="text" placeholder="R$ 00,00"/>
              </div>
            </InputWrapper>
            <Textarea label="Description" title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            <button
              type="button"
            >
              Adicionar pedido
            </button>
          </Form>

        </Content>
      }
      <Footer />
    </Container>
  )
}