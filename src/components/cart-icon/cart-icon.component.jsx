import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, toggleCartDropdown } = useContext(CartContext);
  const toggleCartDropdownListener = () => {
    toggleCartDropdown(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' onClick={toggleCartDropdownListener}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;