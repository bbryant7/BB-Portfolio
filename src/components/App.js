import React, { Component } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="splash">
        <h1 className="top">
          Hey y'all, <span>I'm Bailey Bryant.</span>
        </h1>
        <h1> I'm a Web Developer. </h1>
      </div>
    );
  }
}

export default App;
