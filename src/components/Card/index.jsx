import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight, FaRegHeart, FaHeart, FaTrashAlt} from 'react-icons/fa'

import { Container } from './styles';
import { Button } from '../Button';


export function Card({data, ...rest}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

  const { user } = useAuth();
  const navigate = useNavigate()

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

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
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
        <img src={imageURL} alt={data.title} />
      </div>
      <a type='button' onClick={user.isAdmin ? () => handleEditDish(data.id) : () => handleDetails(data.id)}>
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