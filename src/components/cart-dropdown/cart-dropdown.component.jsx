import { useSelector } from 'react-redux';
import { selectCartReducer } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyCartNote } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useSelector(selectCartReducer);
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