import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <a href="/home">Home</a>
            <a href="/countries">Countries</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
        </div>
    );
};

export default Header;