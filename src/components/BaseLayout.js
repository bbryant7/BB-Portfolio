import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github.png';
import Logo from '../images/B2-logo.png';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav className="navbar">
          <Link activeClassName="selected"  activeStyle={{color: "#0D6F7F"}} className="nav-link" to='/#portfolio'> Portfolio</Link>
          <Link activeClassName="selected"  activeStyle={{color: "#0D6F7F"}} className="nav-link" to='/#about-page'> About</Link>
          <NavLink activeClassName="selected"  activeStyle={{color: "#0D6F7F"}} exact to='/'> <img src={Logo} className="logo"/></NavLink>
          <Link activeClassName="selected"  activeStyle={{color: "#0D6F7F"}} className="nav-link" to='/#contact'> Contact</Link>
          <NavLink activeClassName="selected"  activeStyle={{color: "#0D6F7F"}} className="nav-link" to='/resume'> Résumé</NavLink>


        </nav>

        {this.props.children}
        <footer>
          <div id="contact">
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
