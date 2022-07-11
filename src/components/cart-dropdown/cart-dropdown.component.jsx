import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context.jsx';

import Button from '../../components/button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import {
  CartDropdownContainer,
  CartItems,
  EmptyCartNote
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
          ) : (
            <EmptyCartNote>Your cart is empty</EmptyCartNote>
          )
        }
      </CartItems>
      <Button children='Go to checkout' onClick={goToCheckoutHandler} />
    </CartDropdownContainer>
  );
}

export default CartDropdown;