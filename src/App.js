import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.scss";
import Navigation from "./components/Navigation";
import './components/style.css'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>

          <Route path="/" exact>
              <Home />
          </Route>

          <Route path="/signup" exact>
              <Signup />
          </Route>

          <Route path="/login" exact>
              <Login />
          </Route>

      </Switch>
    </BrowserRouter>


  );
}

export default App;
