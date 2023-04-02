import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'> 
             <img src={logo} alt='' />
             <div  >
                <a href="/order">Order</a>
                <a href="/ordereview">Order Review</a>
                <a href="Manage Inventory">Manage Inventory</a>
                <a href="log-in">LogIn</a>
             </div>
        </nav>
    );
};

export default Header;