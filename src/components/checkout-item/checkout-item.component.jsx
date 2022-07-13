import {
  useSelector,
  useDispatch
} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  SpanName,
  SpanQuantity,
  SpanPrice,
  DivArrow,
  DivValue,
  RemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanName>{name}</SpanName>
      <SpanQuantity>
        <DivArrow onClick={removeItemFromCartHandler}>&#10094;</DivArrow>
        <DivValue>{quantity}</DivValue>
        <DivArrow onClick={addItemToCartHandler}>&#10095;</DivArrow>
      </SpanQuantity>
      <SpanPrice>{price}</SpanPrice>
      <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;