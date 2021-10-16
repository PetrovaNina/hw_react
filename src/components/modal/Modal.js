import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Form from "../form/Form";
import '../../index.css'
import './Modal.css'

const modalRootElement = document.querySelector('#modal');

const Modal = ({ open, submit, cancel }) => {
    const element = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        modalRootElement.appendChild(element);
        return () => {
            modalRootElement.removeChild(element);
        }
    });

    const formProps = {
        fields: [
            {
                label: false,
                placeholder: 'Commit hash',
                isRequired: false,
                hasIcon: true,
                name: 'commit hash',
            }
        ],
        buttons: [
            {
                value: 'Run build',
                onClick: submit,
                className: 'modal-submit-btn action',
                disabled: false,
                active: true,
                type: 'submit',
            },
            {
                children: 'Cancel',
                onClick: cancel,
                className: 'modal-cancel-btn default',
                disabled: false,
                active: true,
            },
        ]

    }

    if (open) {
        return createPortal(
            <div className='modal-overlay'>
                <div className='modal-window'>
                    <article className='modal-header'>
                        <h3 className="modal-title">New build</h3>
                        <p>Enter the commit hash witch you want to build.</p>
                    </article>
                    <Form props={formProps} />
                </div>
            </div>,
            element)
    }
    return null;
};

Modal.propTypes = {
    open: PropTypes.bool,
    cancel: PropTypes.func,
    submit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    open: false,
    cancel: () => {
    },
    submit: () => {
    },
    children: null,
};
export default Modal;