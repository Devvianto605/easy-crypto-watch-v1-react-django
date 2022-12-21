import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthGuard = () => {
    // const auth = true; // determine if authorized, from context or however you're doing it
    const auth = useSelector((state) => state.auth);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth.account ? <Navigate to="/dashboard" /> : <Outlet /> ;
}

export default AuthGuard;
