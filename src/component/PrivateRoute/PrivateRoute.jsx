import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticateSelector } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ component, ...props }) => {
    const isAuthenticate = useSelector(isAuthenticateSelector);

    return !isAuthenticate ? <Redirect to="/login" /> : <Route {...props} component={component} />
};

export default PrivateRoute
