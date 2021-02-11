import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="service">Service</Link>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="register">Register</Link>
            </li>
        </ul>
    </nav >
)





export default Header 