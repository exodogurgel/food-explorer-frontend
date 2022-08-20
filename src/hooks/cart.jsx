import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [])


  function handleAddDishToCart(data, quantity, image){
    const { id, title, price} = data
    const priceFormatted = quantity * Number(price.replace(',', '.'))
    
    const order = {id, title, price: priceFormatted, image, quantity}
    
    const orderExists = cart.some((ord) => ord.title === order.title)
    if (orderExists) {
      return alert("Esse item já está no carrinho")
    }

    setCart(prevState => [...prevState, order])
    
  }

  function handleRemoveDishFromCart(deleted) {
    setCart(prevState => prevState.filter(item => item.id !== deleted))
  }

  const total = cart.reduce((value, item) => {
    return value + item.price
  },0) 

  useEffect(() => {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(cart));
  }, [cart])

  return (
    <CartContext.Provider value={{ 
      cart,
      handleAddDishToCart,
      handleRemoveDishFromCart,
      total: String(total).replace('.', ',')
    }}>
      { children }
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };