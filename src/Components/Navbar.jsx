import React, {useEffect, useState} from 'react'
import {Button} from './index'

function Navbar() {
    let [user, setUser] = useState(false)

    const handleUser = useEffect(() => {
        // check if user is logged in
    }, [])

    return (
        <div>
            <Button label="Home" />
            <Button label="About" />
            <Button label="Contact" />
            {user ? <Button label="Logout" /> : <Button label="Login" />}
        </div>
    )
}

export default Navbar