import React, {Fragment} from "react";
import Form from "../components/form/Form";

const formFields = [
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
]
export const Settings = () => {
    return (
        <Fragment>
            <section className='content'>
                <div className='content-container settings-content-container container flex column'>
                    <article className='content-container container-article'>
                        <h1>Settings</h1>
                        <p className='article-subheading'>Configure repository connection and synchronization
                            settings.</p>
                    </article>
                    <Form fields={formFields}/>
                </div>
            </section>
        </Fragment>
    )
}