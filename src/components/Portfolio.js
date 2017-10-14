import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import MusicReview from "../images/music-review.png";
import Ecom from "../images/ecom.png";
class Portfolio extends Component {
  render() {


    return (
      <div className="portfolio">
        <div className="project">
          <h3> Online Furniture </h3>
          <img src={Ecom} className="portfolio-image"/>
          <p> this project... view project live <a href="x">here</a></p>
          <p> Technology used: HTML5, JavaScript, React, Redux, CSS</p>
          <div className="project-links">
            <a href="x"> Live Link </a>
            <a href="x"> Code</a>
          </div>
        </div>
        <div className="project">
          <h3> Code Snippets</h3>
          <img src={MusicReview}  className="portfolio-image"/>
          <p>An app to help developers organize snippets of code. </p>
          <p> Technology used: JavaScript, MongoDB, Mongoose, Express.js, Mustache </p>
          <div className="project-links">
            <a href="x"> Live Link </a>
            <a href="x"> Code</a>
          </div>
        </div>
        <div className="project">
          <h3> Music Share </h3>
          <img src={MusicReview} className="portfolio-image"/>
          <p>  this project... view project live <a href="x">here</a></p>
          <p> Technology used: HTML5, JavaScript, React, Bootstrap, CSS  </p>
          <div className="project-links">
            <a href="x"> Live Link </a>
            <a href="x"> Code</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
