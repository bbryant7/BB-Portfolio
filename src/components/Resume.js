import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import ResumeDoc from"../Documents/Bailey_Bryant_Resume.pdf";

class Resume extends Component {
  render() {


    return (
      <div>
      <h1>  Resume</h1>
 <a href={ResumeDoc}>DownLoad Resume</a>

      </div>
    );
  }
}

export default Resume;
