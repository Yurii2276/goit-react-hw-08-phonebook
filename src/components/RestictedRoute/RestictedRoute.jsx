import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

export default function RestictedRoute({ children, redirectTo = '/contacts' }) {
    const authenticated = useSelector(selectAuthAuthenticated);

    return (
        authenticated ? <Navigate to={redirectTo} replace /> : children
  );
}
