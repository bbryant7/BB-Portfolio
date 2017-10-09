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
      <img src={Ecom} height= "400px" width="400px" className="portfolio-image"/>
      <img src={MusicReview} height= "400px" width="400px" className="portfolio-image"/>
      <img src={Ecom} height= "400px" width="400px" className="portfolio-image"/>
      </div>


      </div>
    );
  }
}

export default Portfolio;
