import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import MusicReview from "../images/music-review.png";
import Ecom from "../images/ecom.png";
class Portfolio extends Component {
  render() {


    return (
      <div id="portfolio">

        <div className="project">
          <h3> Online Furniture </h3>
          <p className="project-info"> An online shopping resource for home goods.</p>
          <img src={Ecom} className="portfolio-image"/>
          <p className="technology"> <span className="bold"> Technology used:</span> HTML5, JavaScript, React, React-Router-Dom, CSS</p>
          <div className="project-links">
            <a href="x"> Live Link </a>
            <a href="https://github.com/bbryant7/e-com-site"> Code</a>
          </div>

        </div>
        <div className="project">
          <h3> Code Snippets</h3>
          <p className="project-info">An app to help developers organize snippets of code. </p>
          <img src={MusicReview}  className="portfolio-image"/>
          <p className="technology"> <span className="bold"> Technology used:</span> JavaScript, MongoDB, Mongoose, Express.js, Mustache </p>
          <div className="project-links">
            <a href="https://github.com/bbryant7/Code-Snippet-App"> Code</a>
          </div>
        </div>
        <div className="project">
          <h3> Music Share </h3>
          <p className="project-info"> An app to share music recommendations.</p>
          <img src={MusicReview} className="portfolio-image"/>
          <p className="technology"> <span className="bold"> Technology used:</span> HTML5, JavaScript, React, Bootstrap, CSS  </p>
          <div className="project-links">
            <a href="https://bbryant7.github.io/Music-Review/"> Live Link </a>
            <a href="https://github.com/bbryant7/Music-Review"> Code</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
