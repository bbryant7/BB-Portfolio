import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import ResumeDoc from"../Documents/Bailey_Bryant_Resume.pdf";

class Resume extends Component {
  render() {


    return (
      <div className ="resume">
        <div >
          <button><a href={ResumeDoc}>Download </a></button>
        </div>
        <div className="Resume-text">
        <div className="resume-header">
          <h1> Bailey Bryant </h1>
          <h2> Front End Web Developer</h2>
          <p>ATX | 512.507.4810 | bailey.bryant10@gmail.com | <a href="https://www.linkedin.com/in/bailey-bryant-44699582/" >LinkedIn</a> | <a href="https://github.com/bbryant7">GitHub </a></p>
          </div>
          <h3> SKILLS </h3>
          <p><span>Technical Skills: </span>JavaScript, HTML, CSS, React, Bootstrap, Node.js, Git, GitHub</p>
          <p><span> Learning and Interests: </span> Redux, web accessibility, UX design, responsive design</p>
          <p><span> Soft Skills: </span> Strong multi-tasking skills and ability to meet strict deadlines, quickly adapts to new processes and systems, research and analysis skills, strong organizational talent, program-management, project-management, event-management, client relations</p>

          <h3>RELEVANT EXPERIENCE</h3>
          <div className="sub-header">
          <h4> Operations Specialist | IBM </h4>
          <h4> Aug 2016 - Sept 2017</h4>
          </div>
          <ul>
            <li>Planned and executed 15 enablement workshops, 2 new-hire bootcamps and 14 early-professional hiring events for the IBM Offering Management Division</li>
            <li>Coordinated with 30+ vendors to create seamless experiences in 6 US cities</li>
            <li>Managed a $ 1 million budget; managed all vendor invoices, ensuring payments were made on time and within IBM procedure</li>
            <li>Created the badging strategy for IBM Offering Management, a gamified credentials program for IBM employees, and acted as project manager for a cross-disciplinary team of 5</li>
          </ul>
          <div className="sub-header">
          <h4> Inside Sales Representative | Unique Digital Inc. </h4>
          <h4> Dec 2014 - Aug 2016</h4>
          </div>
          <ul>
            <li>Provided support to senior account executives including managing customer accounts, leads, and pricing</li>
            <li>Created and customized IT solution configurations and accompanying quotes</li>
            <li>Maintained vendor and customer relationships</li>
            <li>Continued personal research to achieve high level understanding of evolving IT products and services</li>
            <li>Managed training and on-board process of new hires</li>
            <li>Organized weekly office wide educational product seminars and customer events</li>
          </ul>
          <h3>EDUCATION</h3>
          <div className="sub-header">
            <h4> The Iron Yard</h4>
            <h4> Jul 2017 - Oct 2017</h4>
            </div>
            <ul>
              <li>The Iron Yard is a 12-week coding academy specializing in highly focused, immersive training centered on language fluency, object-oriented programming, and project-based learning</li>
              <li>Graduate of a full-stack web development program with an emphasis on front-end web development and React</li>
            </ul>
            <div className="sub-header">
            <h4>The University of Texas at Austin</h4>
            <h4>Aug 2010 - May 2014</h4>
            </div>
            <ul>
              <li>Graduate of the Liberal Arts College with B.A. in History and a minor in European Studies</li>
              <li>Graduated with honors, GPA 3.7 (4.0 scale)</li>
            </ul>
        </div>
        </div>
    );
  }
}

export default Resume;
