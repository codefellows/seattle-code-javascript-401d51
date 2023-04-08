import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../store/cart';
import { adjustInventory, getProducts } from '../../store/products';

const Products = () => {
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.categories)
  const dispatch = useDispatch();
  // const { activeCategory } = categories;

  const addItemHandler = (product) => {
    dispatch(adjustInventory(product));
    dispatch(addProduct(product));  // inventory listed in cart isn't spot on.  does it need to be???  I don't think so.  item is secured enough
  };

  useEffect(() => {
    dispatch(getProducts(activeCategory.name))
  }, [activeCategory]);

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
                  <Grid container>
                    <Grid item xs>
                      <Button
                        size="small"
                        onClick={() => addItemHandler(product)}
                      >
                        Add to Cart
                      </Button>
                    </Grid>
                    <Grid item xs>
                      <Button
                        size="small"
                        component={Link}
                        to={`/productDetails/${product._id}`}
                      >
                        View Details
                      </Button>
                    </Grid>
                  </Grid>
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
