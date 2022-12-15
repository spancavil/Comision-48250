import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'
import App from "../../App";

export default function NavBar({temp, name}) {

    //Las props son un objeto
    console.log(temp);

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
            <span>
                {temp}
            </span>
            <span>
                {name}
            </span>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
