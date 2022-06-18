import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ cartCount = 0 }) => {
    return (
        <div className='container'>
            <div>.shopy</div>
            <div></div>
            <div className='right'>
                <Link to="/cart">
                    <div className='cartButton'>Cart ({cartCount})</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;