import { Container } from './styles';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight, FaRegHeart, FaHeart} from 'react-icons/fa'
import { useState } from 'react';

export function Card({data, ...rest}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
      <button
        onClick={handleIsFavorite}
      > 
        {isFavorite ? <FaHeart size={30}/> : <FaRegHeart size={30}/>} 
      </button>
      
      <div>
        <img src={data.image} alt="" />
      </div>
      <h3>{data.title} <FaAngleRight /></h3>
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