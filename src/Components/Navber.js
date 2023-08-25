import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Navber.css";

class Navber extends Component {
  render() {
    return (
      <nav className="NavberItems">
        <h1 className="Navber-logo">Trippy</h1>
        <ul className="nav-menu">
          <li>
            <Link to='\'>
              <i class="fa-solid fa-house-user"></i>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navber;
