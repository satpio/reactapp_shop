import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart } from '../../store/cart/cart.action';
import {
  CartItemContainer,
  ItemDetails,
  SpanPrice,
  SpanName,
  SpanRemove,
  Image
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const clearItemFromCartHandler = async () => dispatch(clearItemFromCart(cartItems, cartItem));
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <SpanName>{name}</SpanName>
        <SpanPrice>{quantity} x {price}</SpanPrice>
        <SpanRemove onClick={clearItemFromCartHandler}>remove</SpanRemove>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;