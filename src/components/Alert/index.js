import React from "react";
import './Alert.css';

export const Alert = ({type, center, children}) => {
    return <div className={`alert ${type} ${center ? 'center' : ''}`}>
        {children}
    </div>
}