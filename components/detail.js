import React from "react";
import { MyContext } from "../App";
import { NavLink } from "react-router-dom";
class detail extends React.Component {
  constructor() {
    super();
    this.state = {
      holdings: [],
    };
  }

  mapUsersList(context) {
    console.log(context);
    return context.store.db.holdings.map((holding, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{holding.hname}</td>
        <td>{holding.hsector}</td>
        <td>{holding.htype}</td>
        <td>{holding.hasset}</td>
      </tr>
    ));
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container-fluid md-5 mt-5">
            <div className="row">
              <h2 className="text text-center text-success">
                Mutual Funds Details
              </h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div class="card1">
                  <div class="card-body ms-6">
                    <h5 class="card-title">Monthly SIP</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Min: Rs.1000/-
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="card1">
                  <div class="card-body ms-6">
                    <h5 class="card-title">One-Time-SIP</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Min: Rs. 100000/-
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <h3 className="text text-success mt-5">Holdings</h3>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">
                    <span className="mr-2">Stock Name</span>
                  </th>
                  <th scope="col">
                    <span className="mr-2">Sector</span>
                  </th>
                  <th scope="col">
                    <span className="mr-2">Type</span>
                  </th>
                  <th scope="col">
                    <span className="mr-2">Assets %</span>
                  </th>
                </tr>
              </thead>
              <tbody>{this.mapUsersList(context)}</tbody>
            </table>

            <h3 className="text text-success mt-5">Advanced Ratios</h3>
            <table className="table">
              <tr>
                <td>Top 5</td>
                <td>51%</td>
                <td>Alpha</td>
                <td>5.35</td>
              </tr>
              <tr>
                <td>Top 20</td>
                <td>83%</td>
                <td>Beta</td>
                <td>0.96</td>
              </tr>
              <tr>
                <td>P/E Ratio</td>
                <td>33.30</td>
                <td>Sharpe</td>
                <td>1.33</td>
              </tr>
              <tr>
                <td>P/B Ratio</td>
                <td>6.47</td>
                <td>Sortino</td>
                <td>2.00</td>
              </tr>
            </table>
            <button
              class="btn2 btn-success mt-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Click to Understand Terms
            </button>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Misc Terms</h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <h3>P/E Ratio</h3>
                <p>
                  The price-earnings ratio, also known as P/E ratio, P/E, or
                  PER, is the ratio of a company's share price to the company's
                  earnings per share. The ratio is used for valuing companies
                  and to find out whether they are overvalued or undervalued.
                </p>

                <h3>P/B Ratio</h3>
                <p>
                  The P/B ratio measures the market's valuation of a company
                  relative to its book value. The market value of equity is
                  typically higher than the book value of a company, P/B ratio
                  is used by value investors to identify potential investments.
                  P/B ratios under 1 are typically considered solid investments.
                </p>

                <h3>Alpha</h3>
                <p>
                  Alpha is the excess returns relative to market benchmark for a
                  given amount of risk taken by the scheme. Alpha in mutual
                  funds is probably the most important performance measures of a
                  mutual fund scheme.
                </p>

                <h3>Beta</h3>
                <p>
                  Beta of a mutual fund scheme is the volatility of the scheme
                  relative to its market benchmark. If beta of a scheme is more
                  than 1, then scheme is more volatile than its benchmark. If
                  beta is less than 1, then the scheme is less volatile than the
                  benchmark.
                </p>

                <h3>Sharpe</h3>
                <p>
                  Sharpe ratio is used to evaluate the risk-adjusted performance
                  of a mutual fund. Basically, this ratio tells an investor how
                  much extra return he will receive on holding a risky asset
                </p>

                <h3>Sortino</h3>
                <p>
                  The Sortino ratio takes an asset or portfolio's return and
                  subtracts the risk-free rate, and then divides that amount by
                  the asset's downside deviation. The ratio was named after
                  Frank A. Sortino.
                </p>
              </div>
            </div>

            <h3 className="text mt-5 text-center">
              To start the SIP Investment click below
            </h3>
            <NavLink className="nav-link text-center display-6" to={"/SipAmt/"}>
              Start SIP
            </NavLink>
            <div className="container-fluid">
              <div className="row bg-success mt-5">
                <table className="table text-light">
                  <tr>
                    <td>
                      Address : Sno. 101, Sundar Complex, GM Road, Bangalore,
                      India
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
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default detail;

/* <div className="container-fluid mt-5">
<div className="col">
  <p>
    Address : Sno. 101, Sundar Complex, GM Road, Bangalore,
    India
  </p>
  <p>Contact Us : 8345893458</p>
</div>
<div className="col">
  <span class="material-icons">email</span>
  <span class="material-icons">location_on</span>
  <span class="material-icons">sip</span>
  <span class="material-icons">apps</span>
</div>
</div> */
