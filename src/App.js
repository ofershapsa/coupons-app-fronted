import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Login from "./components/Login.jsx";
import company from "./components/Company.jsx";
import customer from "./components/Customer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import admin from "./components/Admin.jsx";
import GuardedRoute from "./components/GuardedRoute.js";
import CompaniesList from "./components/CompaniesList.jsx";
import CustomersList from "./components/CustomersList.jsx";
import AddNewCustomer from "./components/AddNewCustomer.jsx";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <GuardedRoute exact path="/admin" component={admin} />
            <GuardedRoute exact path="/company" component={company} />
            <GuardedRoute exact path="/customer" component={customer} />
            <GuardedRoute exact path="/companiesList" component={CompaniesList} />
            <GuardedRoute exact path="/customersList" component={CustomersList} />
            <GuardedRoute exact path="/addNewCustomer" component={AddNewCustomer} />
            <Route path="*"><h1>No match!!!</h1></Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;

