import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link to="/" style={navStyle}>
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/About" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/Profile" style={navStyle}>
                    <li>Profile</li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;