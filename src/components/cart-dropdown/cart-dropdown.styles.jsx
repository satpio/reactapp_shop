import styled from 'styled-components';

import {
  DefaultButton,
  GoogleSignInButton,
  InvertedButton
} from '../button/button.styles.jsx';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${DefaultButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyCartNote = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;