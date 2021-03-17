
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './components/Login.jsx';



const GuardedRoute = ({ component: Component,...rest }) => (
    <Route {...rest}   render={(props) => (
       console.log(Login.isAuthenticated())
        ?  <Component {...props}  />
        :  <Redirect to='/' /> 
        
        
        )} />
        
        )
        export default GuardedRoute;
     