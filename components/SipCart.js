import React, { Component } from "react";

class SipCart extends Component {
  increase() {
    var amount = this.props.amount + 500;
    this.props.handleCartChange(amount);
  }

  decrease() {
    var amount = this.props.amount - 500;
    this.props.handleCartChange(amount);
  }

  AlertFunction(){
    alert("SIP Proccess Successfull")
  }


  render() {
    return (
      <div>
        <div className="container">
          <p className="display-6 text-center mb-0">Sip Cart</p>

          <div className="d-flex justify-content-center align-items-center my-3">
            <button
              className="btn3 btn-primary material-icons"
              onClick={() => this.decrease()}
            >
              remove
            </button>

            <span className="lead mx-3">{this.props.amount}</span>

            <button
              className="btn3 btn-primary material-icons"
              onClick={() => this.increase()}
            >
              add
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center my-3">
          <button className="btn3 btn-success me-3" onClick={()=>this.AlertFunction()}>Start Investing</button>

          <button className="btn3 btn-warning">Reset Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SipCart;
