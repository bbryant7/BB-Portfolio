import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import about from "../images/about.jpg"

class About extends Component {
  render() {


    return (
      <div className="about-page">
      <img src={about} className="about-picture" alt="Photo of Bailey Bryant"/>
      <div className="about-details">
      <h1>  Hey Y'all</h1>
      </div>



      </div>
    );
  }
}

export default About;
