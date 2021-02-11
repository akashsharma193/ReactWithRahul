import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link" to="home">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="about">About</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="service">Service</Link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <Link class="nav-link" to="login">Login</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="register">Register</Link>
            </li>
        </ul>
    </nav >
)





export default Header 