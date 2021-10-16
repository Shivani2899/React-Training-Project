import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

class Sip extends React.Component {
  investment;
  monthlyRate;
  months;

  constructor() {
    super();
    this.state = {
      rate: 1000,
      years: 10,
      returns: 15,
    };
  }
 

  calculate() {
    let futurevalue = this.state.rate;
    futurevalue = this.state.years;
    futurevalue = this.state.returns;
    let annualRate = 2;
    let monthlyRate = annualRate / 12 / 100;
    let months = this.state.years * 12;

    futurevalue =
      (this.state.rate * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate;
    alert("This is your Future Value:" + futurevalue);
  }

  render() {
    return (
      <div className="body-container">
        <h2 className="text text-center text-success">
          Mutual Fund Investment Calculator
        </h2>
        <div className="radio-container mr-5 d-flex justify-content-center mt-5">
          <label className="text me-3">SIP</label>
          <input type="radio" value="SIP" />
          <label className="text me-3 ms-3">LumpSum</label>
          <input type="radio" name="checked" value="LumpSum" />
        </div>
        <div>
          <h5 className="text text-center mt-3 text-success">
            Monthly Investment ?
          </h5>
          <div className="input-container d-flex justify-content-center mt-2">
            <input id="investment" type="text" />
          </div>
        </div>
        <div>
          <h5 className="text text-center mt-3 text-success">No of Years ?</h5>
          <div className="input-container d-flex justify-content-center mt-2">
            <input id="investment" type="text" />
          </div>
        </div>
        <div>
          <h5 className="text text-center mt-3 text-success">
            Expected Return ?
          </h5>
          <div className="input-container d-flex justify-content-center mt-2">
            <input id="investment" type="text" />
          </div>
        </div>
        <div className="btn-calculate d-flex justify-content-center mt-3">
          <button type="button" onClick={() => this.calculate()}>
            Calculate
          </button>
        </div>

        <div className="row bg-success mt-5">
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
                <span className="material-icons">email</span>
                <span className="material-icons">location_on</span>
                <span className="material-icons">sip</span>
                <span className="material-icons">apps</span>
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
export default Sip;
