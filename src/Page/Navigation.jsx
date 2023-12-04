import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

