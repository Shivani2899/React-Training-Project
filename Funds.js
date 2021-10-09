import React from "react";
import { MyContext } from "../App";
import { NavLink } from "react-router-dom";
class Funds extends React.Component {
  constructor() {
    super();
    this.state = {
      funds: [],
      filterfunds: [],
    };
  }
  mapUsersList(context) {
    const funddata = context.store.db.filterfunds.map((fund, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{fund.fname}</td>
        <td>{fund.frisk}</td>
        <td>{fund.frating}</td>
        <td>{fund.freturn}</td>
        <td>
          {" "}
          <NavLink className="nav-link" to={"/details/" + fund.id}>
            More Details
          </NavLink>
        </td>
      </tr>
    ));
    return funddata;
  }

  filterByRating(min, max) {
    let filterfunds = [];
    Object.assign(filterfunds, this.state.funds);

    let temp = filterfunds.filter(
      (filterfunds) => filterfunds.frating >= min && filterfunds.frating <= max
    );

    this.setState({
      filterfunds: temp,
    });
  }

  sortByReturnAsc() {
    let sortedFunds = [];
    Object.assign(sortedFunds, this.state.funds);

    let temp = sortedFunds.sort((m1, m2) => {
      if (m1.freturn > m2.freturn) return 1;
      else if (m2.freturn > m1.freturn) return -1;
      else return 0;
    });

    this.setState({
      filterfunds: temp,
    });
  }

  sortByReturnDesc() {
    let sortedFunds = [];
    Object.assign(sortedFunds, this.state.funds);

    let temp = sortedFunds.sort((m1, m2) => {
      if (m1.freturn > m2.freturn) return -1;
      else if (m2.freturn > m1.freturn) return 1;
      else return 0;
    });

    this.setState({
      filterfunds: temp,
    });
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container-fluid md-3">
            <p className="display-5 text-success text-center my-4">
              Funds Explorer
            </p>
            <div className="d-flex justify-content-start align-items-center">
              <div className="dropdown me-2">
                <button
                  className="btn4 btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter By Ratings:
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      href
                      className="dropdown-item"
                      onClick={() => this.filterByRating(1, 3)}
                    >
                      1-3
                    </a>
                  </li>
                  <li>
                    <a
                      href
                      className="dropdown-item"
                      onClick={() => this.filterByRating(3, 5)}
                    >
                      3-5
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown ms-auto">
                <button
                  className="btn4 btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By return:
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      href
                      className="dropdown-item"
                      onClick={() => this.sortByReturnAsc()}
                    >
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a
                      href
                      className="dropdown-item"
                      onClick={() => this.sortByReturnDesc()}
                    >
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <table className="table table-striped table-bordered mt-3">
              <thead className="thead-light">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">
                    <span className="mr-2">Fund Name</span>
                  </th>
                  <th scope="col">
                    <span className="mr-2">Risk</span>
                  </th>
                  <th scope="col">
                    <span className="mr-2">Ratings</span>
                  </th>
                  <th scope="col">
                    <span className="mr-2">1Y return %</span>
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>{this.mapUsersList(context)}</tbody>
            </table>

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
        )}
      </MyContext.Consumer>
    );
  }
}
export default Funds;
