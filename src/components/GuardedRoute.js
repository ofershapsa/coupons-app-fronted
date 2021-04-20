
import React,{ useContext} from 'react';
import AppCtx from "./Context";
import { Route, Redirect } from "react-router-dom";
import Login from './components/Login.jsx';




  function GuardedRoute({ component: Component,...rest }) {
    const auth = useContext(AppCtx);
    const { component: Component, ...restProps } = props;
  console.log(auth);
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return auth ? <Component {...routeProps} /> : <Redirect to="/" />;
      }}
    />
  );
    
  }
  

/*
const GuardedRoute = ({ component: Component,...rest }) => (
    
        
    <Route {...rest}   render={(props) => (
       auth ===true
        ?  <Component {...props}  />
        :  <Redirect to='/' /> 
        
        
        )} />
        
        
        )
      */
        
        export default GuardedRoute;
        
     