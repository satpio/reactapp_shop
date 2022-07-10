import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context.jsx';

import Button from '../../components/button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
      </div>
      <Button children='Go to checkout' />
    </div>
  );
}

export default CartDropdown;