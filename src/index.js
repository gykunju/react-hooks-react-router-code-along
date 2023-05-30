import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route >
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  )}

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById("root"));
