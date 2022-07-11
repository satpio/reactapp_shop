import {
  CartItemContainer,
  ItemDetails,
  SpanPrice,
  SpanName,
  Image
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <SpanName>{name}</SpanName>
        <SpanPrice>{quantity} x {price}</SpanPrice>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;