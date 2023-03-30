import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { When } from 'react-if';

const Auth = ({ capability, children }) => {
  const { isLoggedIn, can } = useContext(AuthContext);

  return (
  <>
    {/* {
      (isLoggedIn && can(capability)) ? <>{ children }</> : ''
    } */}
    <When condition={isLoggedIn && can(capability)}>
      {children}
    </When>
  </>
  )
};

export default  Auth;
