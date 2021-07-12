import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <img src="./images/logo.png" alt="Logo"></img>
        </header>
        <main>
          <Switch>
            <Route to="/" component={Homescreen}></Route>
          </Switch>
        </main>
        <footer>reserved all copyright</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
