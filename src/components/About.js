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
          <h1> Hi! </h1>

          <h2> I’m Bailey, and I’m really glad to meet you. </h2>

          <p> Born and raised in Austin, Texas, some might call me a <span className="unicorn">Unicorn</span>. My professional career has been a rewarding, winding road embarking with a history degree and making pit-stops in sales, recruiting and event planning before landing  me here, as a Web Developer. </p>

          <p> When I’m not coding, you’ll find me relaxing at local breweries, playing board-games, fostering sweet kittens (Yes! I’ve got pics!), making costumes and traveling. My latest adventure took me to me to Taipei, Taiwan and Hong Kong.</p>
        </div>
      </div>
    );
  }
}

export default About;
