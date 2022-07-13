import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selector'
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories])
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </CategoryContainer>
      )}
    </Fragment>
  );
}

export default Category;