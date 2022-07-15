import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const SpanPrice = styled.span``;

export const SpanRemove = styled.span`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const SpanName = styled.span`
  font-size: 16px;
`;

export const Image = styled.img`
  width: 30%;
`;