import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {LandingPage} from "./components/LandingPage.js";
import {LoginEtu }from "./components/Etudiants/Login";
import DashboardEtu from "./components/Etudiants/Dashboard";
import RegisterEtu from "./components/Etudiants/Register";
import {LoginChef }from "./components/Chef-Department/Login";
import RegisterChef from "./components/Chef-Department/Register";
import {LoginAdmin }from "./components/Admin/Login";
import RegisterAdmin from "./components/Admin/Register";
import Routes from './screens/Admin/Routes';
import RoutesChef from './screens/Chef-dep/RouteChef'

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <LandingPage/>
      </Route>
      <Route  path="/loginEtu">
      <LoginEtu/>
      </Route>
      <Route path="/registerEtu">
      <RegisterEtu/>
      </Route>
      <Route path="/dashboardEtu">
      <DashboardEtu/> 
      </Route>
      <Route  path="/loginChef">
      <LoginChef/>
      </Route>
      <Route path="/registerChef">
      <RegisterChef/>
      </Route>
      <Route  path="/loginAdmin">
      <LoginAdmin/>
      </Route>
      <Route path="/registerAdmin">
      <RegisterAdmin/>
      </Route>
      <Route path="/dashboardAdmin">   
      <Routes/>
      </Route>
      <Route path="/dashboardChef">   
      <RoutesChef/>
      </Route>
    </Switch>
  </BrowserRouter>

   
  );
}

export default App;