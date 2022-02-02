import React from 'react';
import './Modal.css'

export const Modal = ({isOpen, onClose, children}) => {
    if(!isOpen) return <></>;

    return(
        <>
            <div className='modal-background' onClick={onClose}></div>
            <div className='modal-box'>
                <div className='modal-container'>
                    <div className='modal-close' onClick={onClose}>x</div>
                    {children}
                </div>
            </div>
        </>
    )
}