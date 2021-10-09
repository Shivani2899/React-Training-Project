import React from "react";
import { MyContext } from "../App";
import { withRouter } from "react-router-dom";
import '../App.css';
class SignIn extends React.Component {
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

  signIn(context) {
    console.log(this.props);
    let users = context.store.users.filter(
      (user) =>
        user.userId === this.userIdRef.value &&
        user.password === this.passwordRef.value
    );
    if (users && users.length === 1) {
      this.props.history.push("/");
    } else console.log("login unsuccessfull");
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

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container3 mt-5">
            <h3 className="text text-success text-center">Login Page</h3>
            <hr />
              <div className="mb-3">
                <label>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control sm-3"
                  id="exampleInputEmail1"
                  placeholder="Enter your email address here"
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
              <div className="mb-3">
                <label>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password here"
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
              <button
                type="login"
                className="btn5 btn-success"
                onClick={() => this.signIn(context)}
                disabled={this.state.buttonFlag}
              >
                Login
              </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default withRouter(SignIn);
