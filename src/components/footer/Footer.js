import React from 'react';
import {NavLink} from "react-router-dom";
import './Footer.css'

const footerNavLinks = [
    { id: 'Support', link: '#' },
    { id: 'Learning', link: '#' },
    { id: 'Русская версия', link: '#' }
]

function Footer() {
    return (
        <footer>
            <div className='footer-container container flex'>
                <ul className='footer-navbar'>
                    {footerNavLinks.map(item => <li key={item.id} className='footer-navbar-item'>
                        <NavLink className='link' to={item}>{item.id}</NavLink>
                    </li>)}
                </ul>
                <span className={'copyright'}>© 2021 Nina Petrova</span>
            </div>
        </footer>
    )
}

export default Footer;