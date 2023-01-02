import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'

export default function NavBar() {

    return (
        <ul className="nav-list">
            <li className="nav-item">
                <a href="#home">Coderreact</a>
            </li>
            <li className="nav-item">
                <a href="#news">Termos</a>
            </li>
            <li className="nav-item">
                <a href="#contact">Mates</a>
            </li>
            <li className="nav-item">
                <a href="#about">Yerbas</a>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
