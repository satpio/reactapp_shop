import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context.jsx';

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
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanName>{name}</SpanName>
      <SpanQuantity>
        <DivArrow onClick={removeItemHandler}>&#10094;</DivArrow>
        <DivValue>{quantity}</DivValue>
        <DivArrow onClick={addItemHandler}>&#10095;</DivArrow>
      </SpanQuantity>
      <SpanPrice>{price}</SpanPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;