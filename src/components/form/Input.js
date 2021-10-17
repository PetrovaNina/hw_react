import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon";
import './Input.css'

export default function InputField({ field }) {
    const [inputValue, setInputValue] = useState('');
    const [clearButtonVisibility, setClearbuttonVisibility] =
        useState({ visibility: 'hidden' });

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
        setClearbuttonVisibility({ visibility: 'visible' });
    };

    const resetInputField = (e) => {
        e.preventDefault();
        setInputValue('');
        setClearbuttonVisibility({ visibility: 'hidden' });
    };


    let { name, label, placeholder, isRequired, type, ...attrs } = field;

    const classes = classNames(
        'form-field', 'flex',
        attrs.className,
        attrs.direction ? attrs.direction : 'column'
    );
    
    return <div className={classes}>
        {label && <label
            htmlFor={name}
            className='form-label'>
            {label}
            {isRequired && <span className='required-mark'> *</span>}
        </label>}
        <input
            value={inputValue} onChange={handleUserInput} onBlur={e=>field.onChange(e)}
            name={name}
            id={name} type={type ? type : 'text'}
            className='form-input' placeholder={placeholder}
            required={isRequired && true}
            maxLength='50'
            {...attrs.inputExtraParams}
        />
        {attrs.hasIcon &&
            <button
                style={clearButtonVisibility}
                className='form-input-clear-button'
                onClick={resetInputField}>
                <Icon direct={'icons/clear.svg'} itemName={'clear-button'} />
            </button>}
        {attrs.text && attrs.text}
    </div>
}