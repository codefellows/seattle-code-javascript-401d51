import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
// step one:  import the action
import { getCategories, select } from '../../store/categories';

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories('categories'))
  }, []);

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => dispatch(select(category))}
            >
              {category.name}
            </Button>
          ))
        }
      </ButtonGroup>
    </>
  )
};

// const mapStateToProps = ({ store }) => {
//   return {
//     categories: store.categories,
//   }
// }

// // step to create dispatch for the imported action
// const mapDispatchToProps = {
//   set,
// };



export default Categories;
