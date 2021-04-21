import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" id="navbar-logo">JOB's</Link>
                    <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-links">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-links">Sobre</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/depositions" className="navbar-links">Depoimentos</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/companies" className="navbar-links">Empresas</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/support" className="navbar-links">Suporte</Link>
                    </li>
                    <li className="navbar-btn">
                        <Link to="/sign-up" className="button" id="signup">Registrar</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
