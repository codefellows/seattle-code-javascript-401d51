import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/actions';

const Products = () => {
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.categories)
  const dispatch = useDispatch();
  // const { activeCategory } = categories;
  return (
    <>
      {
        activeCategory && <h2>{activeCategory.displayName}</h2>
      }
      {
        activeCategory && <p>{activeCategory.description}</p>
      }

      {activeCategory && <Container maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card >
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    insert product.description
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => dispatch(addProduct(product))}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>}
    </>
  )

};

// const mapStateToProps = ({ store }) => {
//   return {
//     products: store.products,
//     activeCategory: store.activeCategory,
//   }
// }

export default Products;
