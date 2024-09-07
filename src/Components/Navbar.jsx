import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './index';
import { logout } from '../store/userAuthSilce'; // Import the logout action

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userAuth.user); // Select user from state

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div>
      <Button label="Home" />
      <Button label="About" />
      <Button label="Contact" />
      {user ? (
        <Button label="Logout" onClick={handleLogout} />
      ) : (
        <Button label="Login" />
      )}
    </div>
  );
}

export default Navbar;
