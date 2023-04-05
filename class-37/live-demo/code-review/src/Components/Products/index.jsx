import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
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

      <Container maxWidth="md">
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
