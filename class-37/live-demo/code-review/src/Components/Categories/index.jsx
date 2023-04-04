import { Button, ButtonGroup } from '@mui/material';
import { connect } from 'react-redux';
// step one:  import the action
import { set } from '../../store/reducer';

const Categories = ({ categories, set }) => {
  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => set(category)}
            >
              {category.displayName}
            </Button>
          ))
        }
      </ButtonGroup>
    </>
  )
};

const mapStateToProps = ({ store }) => {
  return {
    categories: store.categories,
  }
}

// step to create dispatch for the imported action
const mapDispatchToProps = {
  set,
};



export default connect(mapStateToProps, mapDispatchToProps)(Categories);
