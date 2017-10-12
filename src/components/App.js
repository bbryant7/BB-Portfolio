import React, { Component } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import MusicReview from "../images/music-review.png";
import Ecom from "../images/ecom.png";
import about from "../images/about.jpg"
import About from "../components/About.js"
import Portfolio from "../components/Portfolio.js"


class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="splash">
          <h1 className="Page-title">
          Hey y’all, <span>I’m Bailey Bryant.</span>
          </h1>
          <h1> I’m a Web Developer. </h1>
        </div>
        <Portfolio/>
        <About/>

      </div>


    );
  }
}

export default App;
