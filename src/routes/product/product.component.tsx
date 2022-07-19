import { useParams } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartReducer } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCurrentProduct } from '../../store/product/product.selector';
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  AddToCardButton,
  AddToCardForm,
  AddToCardInput
} from './product.styles';
import Spinner from '../../components/spinner/spinner.component';

type ProductRouteParams = {
  id: string;
}

const Product = () => {
  const { id } = useParams<keyof ProductRouteParams>() as ProductRouteParams;
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);
  const { cartItems } = useSelector(selectCartReducer);
  const [quantity, setQuantity] = useState(1);
  if (!product || (product && Number(id) !== product.id)) {
    return <Spinner />;
  } else {
    const { name, price, imageUrl } = product;
    const addItemToCartHandler = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (quantity < 1) {
        alert('Quantity must be at least 1!');
        setQuantity(1);
        return;
      }
      dispatch(addItemToCart(cartItems, product, quantity));
    }
    const quantityChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setQuantity(parseInt(value, 10));
    }
    return (
      <ProductContainer>
        <ProductImage src={imageUrl} />
        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductPrice>Price: ${price}</ProductPrice>
          <AddToCardForm onSubmit={addItemToCartHandler}>
            <AddToCardInput
              name='quantity'
              type='number'
              value={quantity}
              onChange={quantityChangeHandler}
              required
            />
            <AddToCardButton>Add to card</AddToCardButton>
          </AddToCardForm>
        </ProductDetails>
      </ProductContainer>
    )
  }
}

export default Product;