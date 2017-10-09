import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav className="navbar">

                <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" exact to='/'> BB</NavLink>


                  <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" to='/portfolio'> Portfolio</NavLink>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" to='/about'> About</NavLink>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" to='/contact'> Contact</NavLink>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" to='/resume'> Resume</NavLink>
              

        </nav>
        {this.props.children}
        <footer>
        <p> Footer </p>

        </footer>
      </div>
    );
  }
}
