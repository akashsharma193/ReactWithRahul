import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="service">Service</a>
            </li>
        </ul>
    </nav>
)





export default Header 