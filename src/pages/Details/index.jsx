import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Ingredient } from '../../components/Ingredient';
import { Container, Main, Ingredients, ButtonBack, Content, Info } from './styles';
import plate from '../../assets/plate-1.png';
import { useState } from 'react';

import { FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';


export function Details() {
  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity() {
    const isGreater10 = quantity >= 9;
    if(isGreater10) {
      return
    }

    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    const isLess0 = quantity <= 1;
    if (isLess0) {
      return
    }
    setQuantity(quantity - 1);
  }

  return (
    <Container>
      <Header />

      <Content>
        <ButtonBack>
          <a href="#"> <FiChevronLeft size={30}/>Voltar</a>
        </ButtonBack>
        <Main>
          <div>
            <img src={plate} alt="" />
          </div>
          <div>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <Ingredients>
              {
                ["Alface", "tomate", "rabanete", "pão naan"].map(ingredient => (
                  <Ingredient key={ingredient} ingredient={ingredient} />
                ))
              }
            </Ingredients>
            <Info>
              <strong>R$ 25,97</strong>
              <button
                onClick={handleRemoveQuantity} 
                className="btn"><FiMinus size={25}/>
              </button>
          
              <span>0{quantity}</span>
          
              <button
                onClick={handleAddQuantity}
                className="btn"><FiPlus size={25}/>
              </button>
              <div>
                <Button title="incluir"/>
              </div>
            </Info>
          </div>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}