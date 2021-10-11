import React, { Fragment } from "react";
import BuildList from "../components/builds/BuildList";

export const BuildHistory = () => {

    return (
        <Fragment>
            <section className='content'>
                <div className='content-container container'>
                    <BuildList/>
                </div>
            </section>
        </Fragment>
    )
}