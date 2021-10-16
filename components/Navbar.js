import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <div className="d-flex justify-content-start align-items-center">
              <i className="material-icons me-2">account_circle</i>
              <span>Wealthify</span>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/funds"
                >
                  Funds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/sip"
                >
                  SIP
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control ms-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="button button-dark ms-3" type="submit">
                <span className="material-icons">search</span>
              </button>
            </form>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/signin"
              >
                SignIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/signup"
              >
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
