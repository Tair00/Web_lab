import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Phone from "./Phone"; // Импортируйте компоненты Phone и Tablet
import Tablet from "./Tablet";

const Products = () => {
    return (
        <div>
            <h2>Товары</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="phones">Смартфоны</Link>
                    </li>
                    <li>
                        <Link to="tablets">Планшеты</Link>
                    </li>
                </ul>
            </nav>
            <Outlet /> {/* В этом месте будут рендериться вложенные маршруты */}
        </div>
    );
};

export default Products;