import Button from '../../components/button/button.component.jsx';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      </div>
      <Button children='Go to checkout' />
    </div>
  );
}

export default CartDropdown;