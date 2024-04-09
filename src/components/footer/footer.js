import React from "react";

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <h3>sunnyside</h3>


            <ul className="links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>

            <ul className="social">
                <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-pinterest"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer