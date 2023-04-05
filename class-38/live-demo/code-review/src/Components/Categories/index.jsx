import { Button, ButtonGroup } from '@mui/material';
import {  useDispatch, useSelector } from 'react-redux';
// step one:  import the action
import { set } from '../../store/actions';

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  
  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => dispatch(set(category))}
            >
              {category.displayName}
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
