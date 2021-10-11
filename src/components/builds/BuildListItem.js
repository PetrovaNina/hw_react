import React from "react";
import './BuildList.css'
import Icon from "../Icon";
import {nanoid} from "nanoid";

let currentBuild = 1335;

export default function ListItem(params) {
    let {status, statusTitle, branch, author, id} = params.params;

    const icon = {
        done: 'icons/check.png',
        processing: 'icons/clock.svg',
        failed: 'icons/fail.svg',
    }
    return (
        <li className='builds-list-item flex'>
            <Icon
                className='builds-list-item-icon'
                direct={icon[status]}
                itemName='ready' key={nanoid()}
            />
            <div className='builds-list-item-data flex'>
                <div className='build-frame flex column'>
                    <div className='build-status flex align-center'>
                        <span className='build-id done'>{`#${currentBuild}`}</span>
                        <h3 className='build-heading'>{statusTitle}</h3>
                    </div>
                    <div className='build-info flex'>
                        <p className='builds-info-commit flex align-center'>
                            <Icon
                                className='builds-info-commit-icon icon'
                                direct='icons/commit.svg'
                                itemName='commit' key={nanoid()}
                            />
                            <span className='builds-info-commit-branch'>{branch}</span>
                            <span className='builds-info-commit-num'>{id.slice(0, 7)}</span>
                        </p>
                        <p className='builds-info-commit-author flex align-center'>
                            <Icon
                                className='builds-info-commit-author-icon icon'
                                direct='icons/user.svg'
                                itemName='user' key={nanoid()}
                            />
                            <span className='builds-info-commit-author-name'>{author}</span>
                        </p>
                    </div>

                </div>
                <div className='build-meta flex'>
                    <p className='builds-meta-date flex align-center'>
                        <Icon className='builds-meta-date-icon icon'
                              direct='icons/calendar.svg'
                              itemName='calendar'
                              key={nanoid()}
                        />
                        <span className='builds-meta-date-data'>21 янв, 03:06</span>
                    </p>
                    <p className='builds-meta-time flex align-center'>
                        <Icon className='builds-meta-time-icon icon'
                              direct='icons/timer.svg' itemName='timer'
                              key={nanoid()}
                        />
                        <span className='builds-meta-time-data'>1 ч 20 мин</span>
                    </p>
                </div>
            </div>
        </li>
    )
}