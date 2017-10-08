import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav className="row navbar navbar-inverse">


                <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" exact to='/'> <span className="splash">home</span></NavLink>

        </nav>
        {this.props.children}
        <footer>
        <p> Footer </p>

        </footer>
      </div>
    );
  }
}
