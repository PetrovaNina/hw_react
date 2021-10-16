import React from 'react';
import Icon from "../Icon";
import Button from "../button/Button.js";
import classNames from "classnames";
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
                {props.fields.map(field => {
                    let { label, placeholder, isRequired, type, ...attrs } = field;

                    const name = label.replaceAll(' ', '-');
                    const classes = classNames(
                        'form-field', 'flex',
                        attrs.className,
                        attrs.direction ? attrs.direction : 'column'
                    );
                    return <div key={label} className={classes}>
                        {label &&
                            <label
                                htmlFor={name}
                                className='form-label'>
                                {label}
                                {isRequired && <span className='required-mark'> *</span>}
                            </label>}
                        <input
                            name={name}
                            id={name} type={type ? type : 'text'}
                            className='form-input' placeholder={placeholder}
                            required={isRequired && true}
                            maxLength='50'
                            {...attrs.inputExtraParams}
                        />
                        {attrs.hasIcon &&
                            <Icon className='input-clear-icon' direct={'icons/clear.svg'} itemName={'clear'} />}
                        {attrs.text && attrs.text}
                    </div>
                })}
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
