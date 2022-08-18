import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { FaAngleRight, FaRegHeart, FaHeart, FaTrashAlt} from 'react-icons/fa'

import { Container } from './styles';
import { Button } from '../Button';


export function Card({data, ...rest}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();

  function handleIsFavorite() {
    setIsFavorite(!isFavorite);
  }

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
    <Container isFavorite={isFavorite} {...rest}>
      {
        user.isAdmin ? 
        <button>
          <FaTrashAlt size={25}/>
        </button>
        :
        <button
          onClick={handleIsFavorite}
        > 
          {isFavorite ? <FaHeart size={30}/> : <FaRegHeart size={30}/>} 
        </button>
      }
      
      <div>
        <img src={data.image} alt="" />
      </div>
      <a href="#">
        <h3>{data.title} <FaAngleRight /></h3>
      </a>
      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>
      <div>
        <button
          onClick={handleRemoveQuantity} 
          className="btn"><FiMinus size={25}/>
        </button>
        
        <span>0{quantity}</span>
        
        <button
          onClick={handleAddQuantity}
          className="btn"><FiPlus size={25}/>
        </button>
        <Button title="incluir"/>
      </div>
      
    </Container>
   )
}