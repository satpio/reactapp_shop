import { useContext, Fragment } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import { CategoriesContext } from '../../contexts/categories.context.jsx';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) =>
          <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
        )
      }
    </Fragment>
  );
}

export default CategoriesPreview;
