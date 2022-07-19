import { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
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
} from './checkout-item.styles';
import { CartItem } from '../../store/cart/cart.types';

type CheckoutItemProps = {
  cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addItemToCartHandler = async () => dispatch(addItemToCart(cartItems, cartItem, 1));
  const removeItemFromCartHandler = async () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemFromCartHandler = async () => dispatch(clearItemFromCart(cartItems, cartItem));
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
});

export default CheckoutItem;