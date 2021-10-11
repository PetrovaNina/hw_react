import React, {Fragment} from "react";
import Icon from "../components/Icon";
import Button from "../components/button/Button";

export const Home = () => {
    const button = {
        children: 'Open settings',
        href: '/settings',
        className: 'action',
        disabled: false,
        active: true
    };
    return (
        <Fragment>
            <section className='content flex'>
                <div className='content-container home-content-container container flex column'>
                    <Icon direct={'icons/tools.svg'} itemName={'tools'}/>
                    <p>Configure repository connection<br/> and synchronization settings</p>
                    <Button key={button.children} params={button}/>
                </div>
            </section>
        </Fragment>
    )
}