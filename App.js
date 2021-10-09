import React from "react";
import Navbar from "./components/Navbar";
import Funds from "./components/Funds";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SipCart from "./components/SipCart";
import SipAmt from "./components/SipAmt";
import Detail from "./components/detail";
import Aboutus from "./components/Aboutus";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var axios = require("axios").default;

export const MyContext = React.createContext(); // Store

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      db: [],
      users: [
        {
          userId: "abc",
          password: "abc123",
        },
        {
          userId: "xyz",
          password: "xyz123",
        },
      ],
    };
  }
  componentDidMount() {
    axios.get("db.json").then((res) => {
      this.setState({ db: res.data });
    });
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          store: this.state,
        }}
      >
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/funds">
              <Funds />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/SipAmt">
              <SipAmt />
            </Route>
            <Route path="/SipCart">
              <SipCart />
            </Route>
            <Route path="/details">
              <Detail />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}
export default App;
