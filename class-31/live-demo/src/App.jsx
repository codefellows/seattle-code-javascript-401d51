import { useContext } from 'react';
import Main from './Components/Main';
import { SettingsContext } from './Context/Settings';
import './styles.css'
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.indigo[1],
  }
}));

function App() {
  const { classes } = useStyles();
  const { title, email } = useContext(SettingsContext);
  return (
    <>
      <h1 data-testid="app-h1" className={classes.h1}>{title}</h1>
      <p data-testid="app-p">email us at: {email}</p>
      <Main />
    </>
  );
}

export default App;
