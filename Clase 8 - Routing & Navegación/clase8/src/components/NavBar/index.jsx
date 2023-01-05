import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">Brand</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/electronics">electronics</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/jewelery">jewelery</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/men's clothing">men's clothing</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/women's clothing">women's clothing</Link>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
