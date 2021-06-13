import React from 'react';
import Cart from '../components/HeaderComponents/Cart';
import Hamburger from '../components/HeaderComponents/Hamburger';
import Logo from '../components/UI/Logo';

const Header = () => {
    return (
        <header className="page-wrapper">
            <div className="menu-logo">
                <Hamburger />
                <Logo />
            </div>
            <div className="cart">
                <Cart />
            </div>
        </header>
    )
}

export default Header;