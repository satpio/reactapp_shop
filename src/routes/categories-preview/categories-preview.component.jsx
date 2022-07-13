import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import { selectCategories } from '../../store/categories/categories.selector'

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  return (
    <Fragment>
      {
        Object.keys(categories).map((title) =>
          <CategoryPreview key={title} title={title} products={categories[title]} />
        )
      }
    </Fragment>
  );
}

export default CategoriesPreview;
