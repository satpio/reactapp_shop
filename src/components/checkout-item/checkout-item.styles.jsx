import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const SpanName = styled.span`
  width: 23%;
`;

export const SpanQuantity = styled.span`
  display: flex;
  width: 23%;
`;

export const SpanPrice = styled.span`
  width: 23%;
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

export const DivArrow = styled.span`
  cursor: pointer;
`;

export const DivValue = styled.span`
  margin: 0 10px;
`;