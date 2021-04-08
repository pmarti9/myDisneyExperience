import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import DisneyArticles from "./components/DisneyArticles/DisneyArticles";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/articles" component={DisneyArticles} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
