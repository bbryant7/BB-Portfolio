import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import MusicReview from "../images/music-review.png";
import Ecom from "../images/ecom.png";
class Portfolio extends Component {
  render() {


    return (
      <div>
      <h1>  My Projects </h1>
      <div className="portfolio">
      <div className="project">
      <h3> Online Furniture </h3>
      <img src={Ecom} height= "350px" width="400px" className="portfolio-image"/>
      <p> this project... view project live <a href="x">here</a></p>
      <p> Technology used: HTML5, JavaScript, React, Redux, CSS</p>
      </div>
      <div className="project" width="400px">
      <h3> Code Snippets</h3>
      <img src={MusicReview} height= "350px" width="400px" className="portfolio-image"/>
      <p>this project... view project live <a href="x">here</a></p>
      <p> Technology used: JavaScript, MongoDB, Mongoose, Express.js, Mustache </p>
      </div>
      <div className="project" width="400px">
      <h3> Music Share </h3>
      <img src={MusicReview} height= "350px" width="400px" className="portfolio-image"/>
      <p>  this project... view project live <a href="x">here</a></p>
      <p> Technology used: HTML5, JavaScript, React, Bootstrap, CSS  </p>
      </div>

      </div>


      </div>
    );
  }
}

export default Portfolio;

// <div>
// <h1>  My Projects </h1>
// <div className="portfolio">
// <h3> Online Furniture </h3>
// <img src={Ecom} height= "400px" width="400px" className="portfolio-image"/>
// <p> this project...</p>
// <p> Technology used: HTML5, JavaScript, React, Redux, CSS</p>
// <h3> Code Snippets</h3>
// <img src={MusicReview} height= "400px" width="400px" className="portfolio-image"/>
// <p>this project...</p>
// <p> Technology used: JavaScript, MongoDB, Mongoose, Express.js, Mustache </p>
// <h3> Music Share </h3>
// <img src={Ecom} height= "400px" width="400px" className="portfolio-image"/>
// <p>  this project...</p>
// <p> Technology used: HTML5, JavaScript, React, Bootstrap, CSS  </p>
//
// </div>
