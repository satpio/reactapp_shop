import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);
  const toggleSetIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' onClick={toggleSetIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}

export default CartIcon;