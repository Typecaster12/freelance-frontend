import { useState } from 'react';
import './Navbar.css'; // You'll need to create this CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    {/* <img src="/path-to-your-logo.png" alt="Logo" /> */}
                    <h2 className='nav-logo'>FreeLance <strong>It.</strong></h2>
                </div>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#jobs">Find Freelancers</a>
                    <a href="#freelancers">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">FreeLancer?</a>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

/* Navbar.css */



