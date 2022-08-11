import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Content, ButtonBack, Form, SectionIngredients, InputWrapper } from "./styles";
import { FiChevronLeft } from 'react-icons/fi';
import { IngredientItem } from "../../components/IngredientItem";
import { AiOutlineUpload } from 'react-icons/ai';

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonBack>
          <a href="#"> <FiChevronLeft size={30}/>Voltar</a>
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
                  <AiOutlineUpload size={30}/>
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
          <Textarea label="Descrição" />
        </Form>
        
      </Content>
      <Footer />
    </Container>
  )
}