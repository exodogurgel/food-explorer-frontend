import { Container, Content, Table, Thead, Tbody, SelectWrapper } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Orders() {
  const orders = [
    {
      id: '0000001',
      items: [
        {
          quantity: 1, 
          name: "Salada Radish",
        },
        {
          quantity: 1,
          name: "Torradas de Parma"
        },
        {
          quantity: 1,
          name: "Chá de Canela"
        },
        {
          quantity: 1,
          name: "Suco de Maracujá"
        }
      ],
      date: "20/05 às 18h00", 
      status: "pendente"
    },

    {
      id: '0000002',
      items: [
        {
          quantity: 1, 
          name: "Salada Radish",
        },
        {
          quantity: 1,
          name: "Torradas de Parma"
        },
        {
          quantity: 1,
          name: "Chá de Canela"
        },
        {
          quantity: 1,
          name: "Suco de Maracujá"
        }
      ],
      date: "20/05 às 18h00" ,
      status: "pendente"
    },
    
  ]

  function handleOrderStatus(order, e) {
    let status = e.target.value
    console.log(status)
    return order = status
  }

  return (
    <Container>
      <Header />
      <Content>
        <h3>Pedidos</h3>
        <main>
          <Table>
            <Thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </Thead>
            <Tbody>

              {
                orders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <SelectWrapper>
                        <span id='teste' className={order.status}></span>
                        <select name="select" id="select" onChange={e => handleOrderStatus(order.status, e)}>
                          <option value="pendente"> Pendente </option>
                          <option value="preparando"> Preparando</option>
                          <option value="entregue">  Entregue</option>
                        </select> 
                      </SelectWrapper>
                    </td>
                    <td>{order.id}</td>
                    <td>
                    {
                      order.items.map(item => (
                        <span key={item.name}> {item.quantity} x {item.name}, </span>
                      ))
                    }
                    </td>
                    <td>{order.date}</td>
                  </tr>
                ))
              }
            </Tbody>
          </Table>
        </main>
      </Content>
      <Footer />
    </Container>
  )
} 