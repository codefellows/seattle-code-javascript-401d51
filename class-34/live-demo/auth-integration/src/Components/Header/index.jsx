import { SettingsContext } from '../../Context/Settings';
import { useContext, useState } from 'react';
import { createStyles } from '@mantine/core';
import { AuthContext } from '../../Context/Auth';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.indigo[1],
  }
}));

const Header = () => {
  const { classes } = useStyles();
  const { title, email, setEmail, staff, addStaff } = useContext(SettingsContext);
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // console.log('isLoggedIn', isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    // addStaff({name, position});
    e.target.reset();
  }

  return (
    <>
      <h1 data-testid="app-h1" className={classes.h1}>{title}</h1>
      <p data-testid="app-p">email us at: {email}</p>
      <form onSubmit={handleSubmit}>
        <label> username:
          <input onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label> password:
          <input onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>

      <button onClick={logout}>logout</button>



      {/* <label> change email
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>
      <form onSubmit={handleSubmit}>
        <label> name:
          <input onChange={(e) => setName(e.target.value)} />
        </label>
        <label> position:
          <input onChange={(e) => setPosition(e.target.value)} />
        </label>
        <button type="submit">Add Staff</button>
      </form>
      <ul>
        {
          staff.map((member, idx) => (
            <li key={`header-${idx}`} style={{width: 'max-content'}}>{member.name}, {member.position}</li>
          ))
        }
      </ul> */}
    </>
  )

};

export default Header;
