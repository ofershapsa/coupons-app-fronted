
//import React, { useContext } from "react";
//import AppCtx from "./Context";
import { Route, Redirect } from "react-router-dom";
//import Login from "./components/Login.jsx";

function GuardedRoute(props) {
  //const auth = useContext(AppCtx);
  const { component: Component, ...restProps } = props;
  console.log(localStorage.getItem("authorization"));
  console.log("hello world")
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return  localStorage.getItem("authorization") !== undefined
        ? <Component {...routeProps} /> : <Redirect to="/" />;
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