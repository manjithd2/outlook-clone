import * as React from 'react';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div className="navigation">
        {/* <h1>Navigation</h1> */}
        <Button className="signout" variant="outlined">Sign Out</Button>
        </div>
    )
}

export default Header