import { Button } from '@mantine/core';
import React, { useContext } from 'react';
import { ModeContext } from '../../Context/Mode';


const Main = () => {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <Button
        variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
      >
        Click me I do nothing
      </Button>
      <h3 data-testid="main-h3">Mode from context: {mode}</h3>
    </>
  );
}

export default Main;
