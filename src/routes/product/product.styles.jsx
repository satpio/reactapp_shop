import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
 width: 50%;
 height: auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-left: 5%;
`;

export const ProductName = styled.span`
  margin-bottom: 15px;
  font-size: 36px;
  font-weight: 600;
`;

export const ProductPrice = styled.span`
  margin-bottom: 15px;
  font-size: 24px;
`;

export const AddToCardButton = styled(Button)`
  max-width: 50%;
`;

export const AddToCardForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const AddToCardInput = styled.input`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  line-height: 50px;
  font-size: 15px;
  text-align: center;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;