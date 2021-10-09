import React, { Component } from "react";
import SipCart from "./SipCart";
import "../App.css";
import { NavLink } from "react-router-dom";

class SipAmt extends Component {
  constructor() {
    super();
    this.state = {
      amount: 1000,
    };
  }

  increase() {
    this.setState({
      amount: this.state.amount + 500,
    });
  }

  decrease() {
    this.setState({
      amount: this.state.amount - 500,
    });
  }

  handleCartChange(amount) {
    this.setState({
      amount: amount,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="heading text-center text-info">SIP Investment</h1>
          <hr />
          <p className="display-6 text-center mb-0">Sip Amount</p>

          <div className="d-flex justify-content-center align-items-center my-3">
            <button
              className="btn3 btn-primary material-icons"
              onClick={() => this.decrease()}
            >
              remove
            </button>

            <span className="lead mx-3">{this.state.amount}</span>

            <button
              className="btn3 btn-primary material-icons"
              onClick={() => this.increase()}
            >
              add
            </button>
          </div>
        </div>

        <SipCart
          amount={this.state.amount}
          handleCartChange={(amount) => this.handleCartChange(amount)}
        />

        <div className=" container-fluid row bg-success mt-5">
          <table className="table text-light">
            <tr>
              <td>
                Address : Sno. 101, Sundar Complex, GM Road, Bangalore, India
              </td>
              <td>
                <NavLink className="nav-link text-light" to={"/aboutus"}>
                  About Us
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Contact Us : 8345893458</td>
              <td>Help and Support</td>
            </tr>
            <tr>
              <td>
                <span class="material-icons">email</span>
                <span class="material-icons">location_on</span>
                <span class="material-icons">sip</span>
                <span class="material-icons">apps</span>
              </td>
              <td>
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.fOgXhnIHXZmrKeWIQPZZwgHaCl&pid=Api&P=0&w=468&h=164"
                  className="rounded float-end"
                  alt="..."
                  width="100px"
                  height="50px"
                />
                <img
                  src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png"
                  className="rounded float-end"
                  alt="..."
                  width="100px"
                  height="50px"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default SipAmt;
