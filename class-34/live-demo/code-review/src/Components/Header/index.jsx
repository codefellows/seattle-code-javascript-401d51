import { createStyles, Group, Header, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';
import Login from '../Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    padding: theme.spacing.md,
  },
  link: {
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    textDecoration: 'none',
  }
}));

const HeaderComponent = () => {
  const { classes } = useStyles();
  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Group position="apart">
          <Group>
            <Link className={classes.link} to="/" default >Home</Link>
            <Link className={classes.link} to="/settings">Settings</Link>
          </Group>
          <Login />
        </Group>
      </Navbar>
    </Header>
  )
};

export default HeaderComponent;
