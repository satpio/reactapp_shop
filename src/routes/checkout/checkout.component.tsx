import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, selectCartIsCheckoutDone, selectCartCount } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Button from '../../components/button/button.component';
import { setIsCheckoutDone } from '../../store/cart/cart.action';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';


const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCheckoutDone = useSelector(selectCartIsCheckoutDone);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);
  const isCheckoutDoneHandler = async () => {
    dispatch(setIsCheckoutDone(!isCheckoutDone));
    navigate('/');
  }
  return (
    <CheckoutContainer>
      {isCheckoutDone ? (
        <Fragment>
          <h1>Thank you for your order!</h1>
          <Button
            children='Go to home page'
            onClick={isCheckoutDoneHandler}
          />
        </Fragment>
      ) : (
        cartCount ? (
          <Fragment>
            <CheckoutHeader>
              <HeaderBlock><span>Product</span></HeaderBlock>
              <HeaderBlock><span>Description</span></HeaderBlock>
              <HeaderBlock><span>Quantity</span></HeaderBlock>
              <HeaderBlock><span>Price</span></HeaderBlock>
              <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) =>
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <Total>Total: ${cartTotal}</Total>
            <PaymentForm />
          </Fragment>
        ) : (
          <h1>Your cart is empty</h1>
        )
      )}
    </CheckoutContainer>
  );

}

export default Checkout;
