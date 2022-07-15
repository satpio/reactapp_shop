import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 300px;
    min-height: 300px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  &>button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const Name = styled.span`
  margin-bottom: 10px;
`;

export const Price = styled.span`
  margin-bottom: 10px;
`;