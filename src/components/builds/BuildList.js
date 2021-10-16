import React from "react";
import './BuildList.css'
import ListItem from "./BuildListItem";
import {buildsStore} from "../../store/buildsStore";
import Button from "../button/Button";

const button = {
    children: 'Show more',
    // onClick: (num) => {
    //     const list = document.querySelector('.builds-list');
    //     const hiddenNum = list.length - 1 - num;
    //     return
    // },
    className: 'show-more-btn default',
    disabled: true,
    active: false,
};

export default function BuildList() {
    return (
        <>
            <ul className='builds-list flex'>
                {buildsStore.map(build => <ListItem key={build.id} params={build}/>)}
            </ul>
            <Button key={button.children} params={button}/>
        </>
    )
}