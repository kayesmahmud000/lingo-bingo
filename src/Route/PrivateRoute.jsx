import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';

const PrivateRoute = ( {children}) => {
    const {user, loader}=useContext(AuthContext);
    const location= useLocation()

    if(loader){
        return <LoadingPage></LoadingPage>
    }
    if(user&& user?.email){
        return children
    }
    return <Navigate state={location?.pathname} to={"/auth/login"}></Navigate>
    
};

export default PrivateRoute;