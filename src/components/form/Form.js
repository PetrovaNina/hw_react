import React from 'react';
import Button from "../button/Button.js";
import InputField from './Input';
import './Form.css'

export default function Form({props}) {
    const { fields, buttons } = props;
    
    return (
        <form action='/build-history'>
            <div className='form-group flex column'>
                {fields.map(field => <InputField field={field} key={field.label} />)}
                <div className='form-buttons flex row'>
                    {buttons.map(button => {
                        return <Button key={button.type || button.children} params={button} />
                    })}
                </div>
            </div>
        </form>
    )
}
