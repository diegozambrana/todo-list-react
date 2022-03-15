import React from 'react';
import { Text } from '../components/Text/Text';
import './index.css'
import {
    Link,
    Outlet,
    useMatch,
    useResolvedPath
  } from "react-router-dom";

export function PublicPage() {
    return <h3>Public</h3>;
}

export const ProtectedPage = () => {
    return <h3>Protected</h3>;
}

const NavLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return <Link
        className={`nav-link ${match ? 'activate' : ''}`}
        to={to}
        {...props}
    >
        {children}
    </Link>
}

export const Layout = () => {
    return <div className='layout'>
        <div className='header'>
            <Text text={'To Do List Project'} type="title"/>
        

            <ul className='navigator'>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/todo">todo</NavLink>
                </li>
            </ul>
        </div>

        <Outlet />

        <div className='footer'>copyright &copy; <a href="http://code.bo" target="_blank">code.bo</a></div>
    </div>
}