import React from 'react';
import Icon from "../Icon";
import Button from "../button/Button";
import {nanoid} from "nanoid";
import '../button/Button.css'

export default function HeaderButtons({onClick}) {

    const buttons = {
        '/settings': {
            children: [
                <Icon key={nanoid()} direct='icons/cog.svg' itemName='settings'/>,
            ],
            href: '/settings',
            className: 'open-settings-btn default flex',
            disabled: false,
            active: true,
        },
        '/build-history': {
            children: [
                <Icon key={nanoid()} direct='icons/play.svg' itemName='Run build'/>,
                <span id='settingsText' key={nanoid()}>Run build</span>
            ],
            onClick: onClick,
            className: 'open-settings-btn default flex',
            disabled: false,
            active: true,
        },
    }

    const path = window.location.pathname;
    const isBuildPage = path === '/build-history';
    !isBuildPage && buttons['/settings'].children.push(
        <span key={nanoid()}>Settings</span>
    )
    return (
        <div className={'header-buttons flex'}>
            {isBuildPage && <Button key={nanoid()} params={buttons[path]}/>}
            <Button key={nanoid()} params={buttons['/settings']}/>
        </div>
    )
}
