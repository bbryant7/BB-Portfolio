import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import about from "../images/bbryant.jpg"

class About extends Component {
  render() {


    return (
      <div id="about-page">
        <img src={about} className="about-picture" alt="Photo of Bailey Bryant"/>
        <div className="about-details">
          <h1> Hi! </h1>

          <h2> I’m Bailey, and I’m really glad to meet you. </h2>

          <p>Born and raised in Austin, Texas, I’m an original Austinite. My professional career has been a rewarding, winding road embarking from UT with a history degree and making pit stops in sales, recruiting and event coordinating. At each stop I gathered new skills and learned more about myself as a professional, but I was not able to create at work.</p>
          <p>While working as an event coordinator, I had the opportunity to work with talented developers and designers. During this time I realized that this was the creative outlet I’d been looking for. The question was “how do I make this happen for myself?” </p>
          <p> I spent 16 weeks at The Iron Yard fully immersed in web development, spending 70+ hours a week honing my skills. I worked with a full-stack spectrum of technologies including HTML/CSS, JavaScript, Node.js, MongoDB, PostgreSQL, and Express.js after which, I chose to focus on front end, learning React and Redux.</p>
          <p>Through code I am able to combine my natural curiosity and logical nature with my desire to create. I find myself surrounded by like-minded individuals that love to learn as part of their craft.</p>
          <p>When I’m not coding, you’ll find me relaxing at the green belt, playing board games, fostering sweet kittens, making costumes and traveling. My latest adventure took me to Taipei, Taiwan and Hong Kong.</p>

        </div>
      </div>
    );
  }
}

export default About;
