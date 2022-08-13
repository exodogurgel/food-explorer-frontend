import { useState } from 'react';
import { Container, Content, Payment, SectionCredit } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderItem } from '../../components/OrderItem';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import receipt from '../../assets/receipt.svg';
import plate from '../../assets/plate-1.png';
import imagePix from '../../assets/pix.svg';
import imageCreditCad from '../../assets/credit-card.svg';
import imageQrCode from '../../assets/qr-code.png';

export function Cart() {
  const [isPix, setIsPix] = useState(true);

  function handlePaymentPix() {
    setIsPix(true);
  }

  function handlePaymentCreditCard() {
    setIsPix(false);
  }

  return (
    <Container> 
      <Header />
      <Content>
        <div>
          <h3>Meu pedido</h3>
          <div className='section-order'>
            <OrderItem data={{
              id: 1,
              image: plate,
              quantity: "2",
              name: "Salada Radish",
              price: "25,97"
            }} />
            <OrderItem data={{
              id: 1,
              image: plate,
              quantity: "2",
              name: "Salada Radish",
              price: "25,97"
            }} />
            <OrderItem data={{
              id: 1,
              image: plate,
              quantity: "2",
              name: "Salada Radish",
              price: "25,97"
            }} />
            <OrderItem data={{
              id: 1,
              image: plate,
              quantity: "2",
              name: "Salada Radish",
              price: "25,97"
            }} />
          </div>
          <div className="result">
            <p>Total: R$ <span>103,88</span></p>
          </div>
        </div>
        <Payment ButtonBackgroundIsActive={isPix}>
          <h3>Pagamento</h3>
          <div>
            <div>
              <button
                className='button-pix'
                type='button'
                onClick={handlePaymentPix}
              >
                <img src={imagePix} alt="ícone do pix" />
                Pix
              </button>
              <button
                className='button-credit'
                type='button'
                onClick={handlePaymentCreditCard}
              >
                <img src={imageCreditCad} alt="ícone de um cartão de credito" />
                Crédito
              </button>
            </div>
            <div className='option-payment'>
              {
                isPix ? 
                <img src={imageQrCode} alt="qr code" />
                :
                <SectionCredit>
                  <Input 
                    type="number"
                    title="Número do Cartão"
                    label="card-number"
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className='data-card'>
                    <Input 
                      type="data"
                      title="Validade"
                      label="validated"
                      placeholder="04/25"
                    />
                    <Input 
                      type="number"
                      title="CVC"
                      label="cvc"
                      placeholder="000"
                    />
                  </div>
                </SectionCredit>
              }
              <Button image={receipt} title="Finalizar pagamento"/>
            </div>
          </div>
        </Payment>
      </Content>
      <Footer />
    </Container>
  )
}