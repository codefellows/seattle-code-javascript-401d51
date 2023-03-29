import { createStyles, Group, Header, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
  },
  link: {
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
    textDecoration: 'none',
  }
}));

const HeaderComponent = () => {
  const { classes } = useStyles();
  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Group>
          <Link className={classes.link} to="/" default >Home</Link>
          <Link className={classes.link} to="/settings">Settings</Link>
        </Group>
      </Navbar>
    </Header>
  )
};

export default HeaderComponent;
