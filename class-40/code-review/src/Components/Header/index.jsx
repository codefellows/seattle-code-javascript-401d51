import { Button, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cart } = useSelector(state => state)
  return (
    <>
      <Grid container p={2}>
        <Grid item xs>
          <Button component={Link} to="/">
            <Typography variant="h4">Our Store</Typography>
          </Button>
        </Grid>
        <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
          <Button component={Link} to="/cart">CART ({cart.length})</Button>
        </Grid>

      </Grid>
    </>
  )
};

export default Header;
