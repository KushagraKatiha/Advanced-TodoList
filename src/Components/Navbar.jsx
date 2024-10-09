import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './index';
import { logout } from '../store/userAuthSilce'; 
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userAuth.user); // Select user from state

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate('/signin'); // Redirect to login page
  };

  return (
    <nav className="w-full bg-slate-800 py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Button onClick={() => navigate('/')} label="Home" className="bg-blue-500 hover:bg-blue-600" />
          <Button label="About" className="bg-blue-500 hover:bg-blue-600" />
          <Button label="Contact" className="bg-blue-500 hover:bg-blue-600" />
        </div>
        <div>
          {user ? (
            <Button label="Logout" className="bg-red-500 hover:bg-red-600" onClick={handleLogout} />
          ) : (
            <Button onClick={() => navigate('/signin')} label="Login" className="bg-green-500 hover:bg-green-600" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
