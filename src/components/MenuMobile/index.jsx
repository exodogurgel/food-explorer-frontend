import { Container, Favorites, Search, Button, Logout } from './styles';
import { IoClose } from 'react-icons/io5';
import { FiSearch, FiLogOut } from 'react-icons/fi';

import receipt from '../../assets/receipt.svg';

export function MenuMobile({menuIsVisible, setMenuIsVisible}) {
  return (
    <Container>
      <IoClose size={45}/>
      <div>
        <Favorites href="#">Meus favoritos</Favorites>

        <Search>
          {<FiSearch size={20}/>}
          <input 
            type="text"
            placeholder="Busque pelas opções de pratos"  
          />
        </Search>

        <Button href="#">
          <img src={receipt} alt="receipt" />
          Meu pedido <span>(0)</span>
        </Button>

        <Logout href="#">
          <FiLogOut />
        </Logout>
      </div>
    </Container>
  )
}