import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default Layout;
