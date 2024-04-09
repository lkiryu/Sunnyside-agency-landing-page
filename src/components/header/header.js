import React from "react";
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <a href="/">
                <img src={logo} alt="logo" className="logo"></img>
            </a>

            <nav>
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <ul className="nav-list">
                    <li className="nav-link"><a href="#about">About</a></li>
                    <li className="nav-link"><a href="#services">Services</a></li>
                    <li className="nav-link"><a href="#projects">Projects</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header