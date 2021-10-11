import React from 'react';
import HeaderButtons from "./HeaderButtons";
import './Header.css'
import classNames from "classnames";
import {nanoid} from "nanoid";

export default function Header({onClick}) {
    const page = window.location.pathname;
    const isBuildHistoryPage = page === '/build-history'
    const isNotSettingPage = page !== '/settings';
    const heading = isBuildHistoryPage ? 'philip1967/my-awesome-repo' : 'School CI server';

    const headerClasses = classNames(
        'header-container', 'container', 'flex',
        isBuildHistoryPage && 'build-page'
    );

    return (
        <header>
            <div className={headerClasses}>
                <h1>{heading}</h1>
                { isNotSettingPage && <HeaderButtons onClick={onClick} key={nanoid()}/>}
            </div>
        </header>
    )
}