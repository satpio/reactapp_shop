import {
  useSelector,
  useDispatch
} from 'react-redux';
import { selectCartReducer } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cartItems } = useSelector(selectCartReducer);
  const dispatch = useDispatch();
  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        children='Add to card'
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      />
    </ProductCartContainer>
  );
};

export default ProductCard;