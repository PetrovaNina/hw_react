import React from 'react';
import Button from "../button/Button.js";
import InputField from './Input';
import './Form.css'

export default class Form extends React.Component {
    state = {};

    componentDidMount() {
        if (localStorage) {
            const formDataFromLocalStorage = localStorage.getItem(window.location.pathname.slice(1) + '-formData');
            if (formDataFromLocalStorage) {
                const formData = JSON.parse(formDataFromLocalStorage);
                this.setState({ ...formData });
            }
        }
    }

    handleUpdateState = (field = "", value = "") => {
        this.setState({ [field]: value }, () => {
            if (localStorage) {
                localStorage.setItem(window.location.pathname.slice(1) + '-formData',
                    JSON.stringify(this.state));
            }
        });
    };

    render() {
        const { fields, buttons } = this.props.props;

        return (
            <form action='/build-history'>
                <div className='form-group flex column'>
                    {fields.map(field => {
                        field.name = field.name || field.label;
                        field.name.replaceAll(' ', '-');
                        field.onChange = (event) => this.handleUpdateState(field.name, event.target.value);

                        return <InputField field={field} key={field.label} />
                    })}
                    <div className='form-buttons flex row'>
                        {buttons.map(button => {
                            return <Button key={button.type || button.children} params={button} />
                        })}
                    </div>
                </div>
            </form>
        )
    }
}
