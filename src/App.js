import React from "react";
import Home from "./components/Home";
import { Login } from "./components/login/Login";
/*import Signup from "./components/Signup";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";*/

function App() {
  return (
    <div className="App">
      <nav>
        <Login />
      </nav>

      <Home />

      <footer>This is a footer</footer>
    </div>
  );
}

export default App;
