import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartReducer } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { setCurrentProductStart } from '../../store/product/product.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ProductCartContainer, Footer, Name, Price, } from './product-card.styles';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { cartItems } = useSelector(selectCartReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, product, 1));
  const redirectToProductHandler = () => {
    dispatch(setCurrentProductStart(product));
    navigate(`/product/${id}`);
  }
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name to={`/product/${id}`}>{name}</Name>
        <Price>${price}</Price>
        <Button
          children='Check product'
          onClick={redirectToProductHandler}
        />
      </Footer>
      <Button
        children='Add to card'
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      />
    </ProductCartContainer >
  );
};

export default ProductCard;