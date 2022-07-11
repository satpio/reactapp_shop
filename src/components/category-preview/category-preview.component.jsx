import ProductCard from '../../components/product-card/product-card.component.jsx';

import {
  CategoryPreviewContainer,
  PreviewContainer,
  CategoryLink
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryLink to={title}>{title.toUpperCase()}</CategoryLink>
      <PreviewContainer>
        {products.filter((_, index) => index < 4).map((product) =>
          <ProductCard key={product.id} product={product} />
        )}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;