import React, { Fragment } from "react";
import Form from "../components/form/Form";

export const Settings = () => {
    return (
        <Fragment>
            <section className='content'>
                <div className='content-container settings-content-container container flex column'>
                    <article className='content-container container-article flex column'>
                        <h1>Settings</h1>
                        <p className='article-subheading'>Configure repository connection and synchronization
                            settings.</p>
                    </article>
                    <Form props={formProps} />
                </div>
            </section>
        </Fragment>
    )
}

const formProps = {
    fields: [
        {
            label: 'GitHub repository',
            placeholder: 'user-name/repo-name',
            isRequired: true,
            hasIcon: true,
        },
        {
            label: 'Build command',
            placeholder: 'npm ci && npm run build',
            isRequired: true,
            hasIcon: true,
        },
        {
            label: 'Main branch',
            placeholder: 'master |',
            isRequired: false,
            hasIcon: true,
        },
        {
            label: 'Synchronize every',
            placeholder: '10',
            isRequired: false,
            type: 'number',
            text: 'minutes',
            direction: 'row',
            className: 'align-center',
            inputExtraParams: {
                width: '52px',
                min: 10,
                max: 60,
                step: 10,
            }
        }
    ],

    buttons: [
        {
            onClick: () => {
                // console.log('Request success! Redirect to settings page');
            },
            className: 'build-history-submit-btn action',
            disabled: false,
            active: true,
            type: 'submit',
            value: 'Save',

        },
        {
            children: 'Cancel',
            href: '/',
            className: 'form-cancel-btn default',
            disabled: false,
            active: true,
        },
    ]
}