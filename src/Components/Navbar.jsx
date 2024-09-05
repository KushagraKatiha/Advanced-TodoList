import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './userAuthSlice'; // Import the logout action
import { Button } from './index'; // Assuming you have a Button component

function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user); // Get the userAuth state from Redux

    const handleLogout = () => {
        dispatch(logout()); // Dispatch logout action when logout button is clicked
    };

    useEffect(() => {
        // You can also add some additional effect to check user status if needed
    }, []);

    return (
        <div className="navbar">
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
