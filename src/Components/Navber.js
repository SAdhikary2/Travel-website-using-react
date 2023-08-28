import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { Menuitems } from "./Menuitems";

class Navber extends Component {
  //this for responsive navber toggle icon
  state = { clicked: false };
  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavberItems">
        <h1 className="Navber-logo">Trippy</h1>

        <div className="menu-icon" onClick={this.handleClicked}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navber;
