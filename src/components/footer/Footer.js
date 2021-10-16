import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css'

export default function Footer({ props }) {
    const { footerNavLinks, copyright } = props
    return (
        <footer>
            <div className='footer-container container flex'>
                <ul className='footer-navbar'>
                    {footerNavLinks.map(item => <li key={item.id} className='footer-navbar-item'>
                        <NavLink className='link' to={item}>{item.id}</NavLink>
                    </li>)}
                </ul>
                <span className={'copyright'}>{copyright}</span>
            </div>
        </footer>
    )
}