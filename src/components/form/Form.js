import React from 'react';
import Button from "../button/Button.js";
import InputField from './Input';
import './Form.css'

export default function Form(props) {

    const buttonProps = [
        {
            onClick: () => {
                console.log('Request success! Redirect to settings page');
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
    return (
        <form action='/build-history'>
            <div className='form-group flex column'>
                {props.fields.map(field => <InputField field={field} key={field.label} />)}
                <div className='form-buttons flex row'>
                    {
                        buttonProps.map(button => {
                            return <Button key={button.type || button.children} params={button} />
                        })
                    }
                </div>
            </div>
        </form>
    )
}
