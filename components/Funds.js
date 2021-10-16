import React, { useDebugValue } from "react";
import { NavLink } from "react-router-dom";
class Funds extends React.Component {
  constructor() {
    super();
    this.state = {
      funds: [
        {
          id: 1011,
          fname: "ICICI Prudential",
          frisk: "Moderately high",
          frating: 5,
          freturn: 113,
        },
        {
          id: 1022,
          fname: "Tata Digital",
          frisk: "Moderately high",
          frating: 4,
          freturn: 113.14,
        },
        {
          id: 1033,
          fname: "Parag Parikh",
          frisk: "Low risk",
          frating: 5,
          freturn: 69.7,
        },
        {
          id: 1044,
          fname: "Axis Small Cap",
          frisk: "High risk",
          frating: 5,
          freturn: 88.64,
        },
        {
          id: 1055,
          fname: "Axis Bluechip",
          frisk: "Moderately high",
          frating: 5,
          freturn: 64.21,
        },
        {
          id: 1066,
          fname: "IIFL Focused Equity",
          frisk: "High risk",
          frating: 5,
          freturn: 76.26,
        },
        {
          id: 1077,
          fname: "SBI Small Cap",
          frisk: "Low risk",
          frating: 4,
          freturn: 74.41,
        },
        {
          id: 1088,
          fname: "Mirae Asset Tax Saver",
          frisk: "Low risk",
          frating: 4,
          freturn: 71.33,
        },
        {
          id: 1099,
          fname: "Mirae Asset Bluechip",
          frisk: "Moderately high",
          frating: 4,
          freturn: 84,
        },
        {
          id: 2011,
          fname: "UTI AMC",
          frisk: "High risk",
          frating: 3,
          freturn: 59,
        },
        {
          id: 2022,
          fname: "Aditya Birla",
          frisk: "Low risk",
          frating: 4,
          freturn: 67.21,
        },
        {
          id: 2023,
          fname: "Nippon India",
          frisk: "Moderately high",
          frating: 4,
          freturn: 75,
        },
      ],
      filterfunds: [
        {
          id: 1011,
          fname: "ICICI Prudential",
          frisk: "Moderately high",
          frating: 5,
          freturn: 113,
        },
        {
          id: 1022,
          fname: "Tata Digital",
          frisk: "Moderately high",
          frating: 4,
          freturn: 113.14,
        },
        {
          id: 1033,
          fname: "Parag Parikh",
          frisk: "Low risk",
          frating: 5,
          freturn: 69.7,
        },
        {
          id: 1044,
          fname: "Axis Small Cap",
          frisk: "High risk",
          frating: 5,
          freturn: 88.64,
        },
        {
          id: 1055,
          fname: "Axis Bluechip",
          frisk: "Moderately high",
          frating: 5,
          freturn: 64.21,
        },
        {
          id: 1066,
          fname: "IIFL Focused Equity",
          frisk: "High risk",
          frating: 5,
          freturn: 76.26,
        },
        {
          id: 1077,
          fname: "SBI Small Cap",
          frisk: "Low risk",
          frating: 4,
          freturn: 74.41,
        },
        {
          id: 1088,
          fname: "Mirae Asset Tax Saver",
          frisk: "Low risk",
          frating: 4,
          freturn: 71.33,
        },
        {
          id: 1099,
          fname: "Mirae Asset Bluechip",
          frisk: "Moderately high",
          frating: 4,
          freturn: 84,
        },
        {
          id: 2011,
          fname: "UTI AMC",
          frisk: "High risk",
          frating: 3,
          freturn: 59,
        },
        {
          id: 2022,
          fname: "Aditya Birla",
          frisk: "Low risk",
          frating: 4,
          freturn: 67.21,
        },
        {
          id: 2023,
          fname: "Nippon India",
          frisk: "Moderately high",
          frating: 4,
          freturn: 75,
        },
      ],
    };
  }
  mapUsersList() {
    const fund = this.state.filterfunds.map((fund, index) => (
      <tr key={fund.id}>
        <th scope="row">{index + 1}</th>
        <td>{fund.fname}</td>
        <td>{fund.frisk}</td>
        <td>{fund.frating}</td>
        <td>{fund.freturn}</td>
        <td>
          <NavLink className="nav-link" to={"/details/" + fund.id}>
            More Details
          </NavLink>
        </td>
      </tr>
    ));
    return fund;
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  href={useDebugValue.toString}
                  className="dropdown-item"
                  onClick={() => this.filterByRating(1, 3)}
                >
                  1-3
                </a>
              </li>
              <li>
                <a
                  href={useDebugValue.toString}
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  href={useDebugValue.toString}
                  className="dropdown-item"
                  onClick={() => this.sortByReturnAsc()}
                >
                  Low to High
                </a>
              </li>
              <li>
                <a
                  href={useDebugValue.toString}
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
          <tbody>{this.mapUsersList()}</tbody>
        </table>

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
export default Funds;
