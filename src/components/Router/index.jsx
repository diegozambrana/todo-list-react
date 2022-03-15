import React from 'react';
import {
    Navigate
} from "react-router-dom";

export const RequiredAuth = ({children}) => {
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to="/login" />
    }
    return children
}