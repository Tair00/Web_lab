import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Phone from './Phone';
import Tablet from './Tablet';
import './Product.css';

const Products = () => {
    return (
        <div>
            <h2>Товары</h2>
            <ul>
                <li>
                    <NavLink to="phones">Смартфоны</NavLink>
                </li>
                <li>
                    <NavLink to="tablets">Планшеты</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Products;

