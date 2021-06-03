
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';


function GuardedRoute(props) {
  //const auth = useContext(AppCtx);
  const { component: Component, ...restProps } = props;
  console.log(Cookies.get("token"));
  
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return  Cookies.get("token") !== undefined
        ? <Component {...routeProps} /> : <Redirect to="/" />;
      }}
    />
  );
}

export default GuardedRoute;