import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.scss";

function App() {
  return (
    <div>
      <nav>
        <Signup />
        <Login />
      </nav>

      <Home />
    </div>
  );
}

export default App;
