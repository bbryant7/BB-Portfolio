import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github.png';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav className="navbar">

                <NavLink activeClassName="selected"  activeStyle={{color: "#079A95"}} className="logo" exact to='/'> BB</NavLink>


                  <NavLink activeClassName="selected"  activeStyle={{color: "#079A95"}} className="nav-link" to='/portfolio'> Portfolio</NavLink>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#079A95"}} className="nav-link" to='/about'> About</NavLink>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#079A95"}} className="nav-link" to='/contact'> Contact</NavLink>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#079A95"}} className="nav-link" to='/resume'> Resume</NavLink>


        </nav>
  
        {this.props.children}
        <footer>
        <div className = "contact">
        <p> Bailey Bryant </p>
        <p> bailey.bryant10@gmail.com </p>
        </div>
        <div className="social-media">
        <a href="https://www.linkedin.com/in/bailey-bryant-44699582/"><img src={LinkedIn} alt="LinkedIn Icon" height="50px"/> </a>
        <a href="https://github.com/bbryant7"><img src={GitHub} alt="GitHub Icon" height="50px"/> </a>
        </div>
        </footer>
      </div>
    );
  }
}
