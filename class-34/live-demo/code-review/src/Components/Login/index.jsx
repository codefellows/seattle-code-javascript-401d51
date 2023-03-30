import { Button, Group, TextInput } from '@mantine/core';
import { useContext, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { AuthContext } from '../../Context/Auth';

const Login = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    logout();
    setUsername('');
    setPassword('');
  }

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color="red" onClick={handleLogout}>Log Out</Button>
        </Then>
        <Else>
          <Group>
            {/* <form> */}
              <TextInput
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button color="gray.8" onClick={() => login(username, password)}>Log In</Button>
            {/* </form> */}
          </Group>
        </Else>

      </If>
    </>
  )

};

export default Login;
