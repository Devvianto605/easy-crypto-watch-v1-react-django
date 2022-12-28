import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestGuard = () => {
    // const auth = true; // determine if authorized, from context or however you're doing it
    const auth = useSelector((state) => state.auth.token);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth.account ? <Outlet /> : <Navigate to="/auth/login" />;
    
}

export default GuestGuard;
