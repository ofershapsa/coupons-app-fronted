import React,{useState}  from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './components/Login.jsx';
import company from './components/company.jsx';
import customer from './components/customer.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import admin from './components/admin.jsx';
import GuardedRoute from './GuardedRoute.js'
import AppCtx from "./Context";

  

function App() {
  const [auth] = useState(true);
  return (
    <div className="App">
    {auth}
   
  <Router>

  <Switch>
     <AppCtx.Provider value = {auth}>
  <Route  exact   path='/' component={Login} />
  <GuardedRoute  exact   path='/admin'  component={admin}  />
  <GuardedRoute exact path='/company' component={company}  /> 
  <GuardedRoute  exact   path='/customer'  component={customer}/> 
  </AppCtx.Provider>
    
  
  
  </Switch>


  </Router>
    </div>
     );
    }
    
    export default App;
