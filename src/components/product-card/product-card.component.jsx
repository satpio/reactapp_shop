import Button from '../../components/button/button.component.jsx';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        children='Add to cart'
        buttonType='inverted'
        type='button'
      />
    </div>
  );
}

export default ProductCard;