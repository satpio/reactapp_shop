import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleSetIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <CartIconContainer onClick={toggleSetIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;