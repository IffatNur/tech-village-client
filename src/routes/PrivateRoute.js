import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../component/Loader';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return children;
    }
    if(loading){
        return <Loader></Loader>
    }
    <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoute;