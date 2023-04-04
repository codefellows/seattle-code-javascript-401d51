import { Card } from '@mui/material';
import { connect } from 'react-redux';

const Products = ({ products, activeCategory }) => {

  return (
    <>
      {
        activeCategory && <h2>{activeCategory.displayName}</h2>
      }
            {
        activeCategory && <p>{activeCategory.description}</p>
      }

      {
        activeCategory && products.map((product, idx) => (
          <Card key={`products-${idx}`} >
            {product.name}
          </Card>
        ))
      }
    </>
  )

};

const mapStateToProps = ({ store }) => {
  return {
    products: store.products,
    activeCategory: store.activeCategory,
  }
}

export default connect(mapStateToProps)(Products);
