import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cart } = useSelector(state => state)
  return (
    <>
      <Grid container p={2}>
        <Grid item xs>
          <Typography variant="h4">Our Store</Typography>
        </Grid>
        <Grid item xs style={{textAlign: 'right', alignSelf: 'center'}}>
          <Typography>CART ({cart.length})</Typography>
        </Grid>

      </Grid>
    </>
  )
};

export default Header;
