import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Button component={Link} to="/">Home</Button>
      <Button component={Link} to="/todo">Todo</Button>
    </>
  );
};

export default Header;
