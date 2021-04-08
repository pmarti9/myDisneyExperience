import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import DisneyArticles from "./components/DisneyArticles/DisneyArticles"
import Navigation from "./components/Navigation/Navigation"

class App extends Component {
  render() {
    return (
      <div className="App">
      <DisneyArticles />
      <Navigation /> 
      </div>
    );
  }
}

export default App;
