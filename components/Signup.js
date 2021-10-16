import React from "react";
import "../App.css";
import { MyContext } from "../App";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class SignUp extends React.Component {
  userIdRef;
  passwordRef;

  constructor() {
    super();
    this.userId = "";
    this.password = "";
    this.state = {
      buttonFlag: true,
      userIdErrFlag: true,
      passwordErrFlag: true,
    };
  }

  signUp(context) {
    console.log(this.props);
    let users = context.store.users.filter(
      (user) =>
        user.userId === this.userIdRef.value &&
        user.password === this.passwordRef.value
    );
    if (users && users.length === 1) {
      this.props.history.push("/signin");
    } else console.log("Registration unsuccessfull");
  }

  textValueChanged() {
    this.setState({
      buttonFlag:
        this.userIdRef.value.length < 1 || this.passwordRef.value.length < 1
          ? true
          : false,
      userIdErrFlag: this.userIdRef.value.length < 1 ? true : false,
      passwordErrFlag: this.passwordRef.value.length < 1 ? true : false,
    });
  }

  AlertFunction() {
    alert("Registration Successfully Done!!! Thankyou!!");
  }
  AlertFunction1() {
    alert("Back To Home!!");
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container3 mt-5">
            <h2 className="text text-center text-success">Registration Form</h2>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter First Name"
                ></input>
              </div>
              <div className="col-md-4">
                <label>Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="middlename"
                  placeholder="Enter Middle Name"
                ></input>
              </div>
              <div className="col-md-4">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter Last Name"
                ></input>
              </div>
              <div className="col-12">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Flat No, Building, Street"
                ></input>
              </div>
              <div className="col-md-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Enter City"
                ></input>
              </div>
              <div className="col-md-3">
                <label>State</label>
                <select id="inputState" className="form-select">
                  <option defaultValue>select option</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunanchal Pradesh</option>
                  <option>Bihar</option>
                  <option>Chandigarh</option>
                  <option>Goa</option>
                  <option>Maharashtra</option>
                  <option>Haryana</option>
                  <option>Kerala</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <div className="col-md-3">
                <label>Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="Enter pin Code"
                ></input>
              </div>
              <div className="col-md-3">
                <label>Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder="Enter Contact No"
                ></input>
              </div>
              <div className="col-md-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="New Username"
                  ref={(input) => {
                    this.userIdRef = input;
                  }}
                  onInput={() => this.textValueChanged()}
                ></input>
                {this.state.userIdErrFlag ? (
                  <p className="text-danger mt-2">User Id can't be empty</p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-3">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="New Password"
                  ref={(input) => {
                    this.passwordRef = input;
                  }}
                  onInput={() => this.textValueChanged()}
                ></input>
                {this.state.passwordErrFlag ? (
                  <p className="text-danger mt-2">Password can't be empty</p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-12">
                <br />
                <NavLink
                  type="button"
                  className="btn btn-success me-3"
                  to={"/signin"}
                  onClick={() => this.signUp(context)}
                  disabled={this.state.buttonFlag}
                >
                  Sign Up
                </NavLink>

                <NavLink
                  type="button"
                  className="btn btn-success mt-2"
                  to={"/"}
                  onClick={() => this.AlertFunction1()}
                >
                  cancel
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default withRouter(SignUp);
