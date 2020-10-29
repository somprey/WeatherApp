import React, {  useState, useCallback } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import "./components/style.css";
import {AuthContext} from "./components/context/auth-context"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  } , [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  } , [])

  let routes;
  if(isLoggedIn){
      routes =(
        <React.Fragment>
          <Route path="/" exact>
            <Home />
          </Route>

          <Redirect to="/"/>
        </React.Fragment>
     
      )
  }else {
    routes =(
      <React.Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>

      <Redirect to="/"/>
      </React.Fragment>
   
    )

  }

 // const auth= useContext(AuthContext);
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login : login , logout : logout }} >

    <BrowserRouter>
      <Navigation />
      <Switch>

        {routes}

      </Switch>
    </BrowserRouter>

    </AuthContext.Provider>

  );
}

export default App;
