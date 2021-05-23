
import React from "react";
import { Route, Redirect } from "react-router-dom";


function GuardedRoute(props) {
  //const auth = useContext(AppCtx);
  const { component: Component, ...restProps } = props;
  console.log(localStorage.getItem("authorization"));
  
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return  localStorage.getItem("authorization") !== null
        ? <Component {...routeProps} /> : <Redirect to="/" />;
      }}
    />
  );
}

export default GuardedRoute;