import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route
} from 'react-router-dom';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategoriesMap } from '../../store/categories/categories.action';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoriesMap));
    }
    getCategoriesMap();
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;
