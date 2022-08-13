import { Container, Content } from './styles';

export function OrderItem({data}) {
  return (
    <Container>
      <div>
        <img src={data.image} alt="imagem do prato" />
      </div>
      <Content>
        <div>
          <span>{data.quantity}X</span>
          <span>{data.name}</span>
          <strong>R$ {data.price}</strong>
        </div>
        <button>Excluir</button>
      </Content>
    </Container>
  )
}