import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selector'

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) =>
          <CategoryPreview key={title} title={title} products={categories[title]} />
        )
      )}
    </Fragment>
  );
}

export default CategoriesPreview;
