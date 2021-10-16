import React from "react";
import "../App.css";

class About extends React.Component {
  render() {
    return (
      <div className="container6">
        <h3>Easy.</h3>
        <h2>Transparent.</h2>
        <h1>Growth.</h1>

        <div className="row mt-5">
          <h5>
            Wealth management is an investment advisory service that combines
            other financial services to address the needs of affluent clients.
            Using a consultative process, the advisor gleans information about
            the client’s wants and specific situation, then tailors a
            personalized strategy that uses a range of financial products and
            services. Often, a holistic approach is taken within wealth
            management. To meet the complex needs of a client, a broad range of
            services—such as investment advice, estate planning, accounting,
            retirement, and tax services—may be provided. While fee structures
            vary across comprehensive wealth management services, typically,
            fees are based on a client’s assets under management (AUM).
          </h5>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card3">
              <div className="card-body">
                <span className="material-icons">engineering</span>
                <h5 className="card-title">Members</h5>
                <h6 className="card-subtitle mb-2 text-muted">100+ Members</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card3">
              <div className="card-body">
                <span className="material-icons">thumb_up</span>
                <h5 className="card-title">Ratings</h5>
                <h6 className="card-subtitle mb-2 text-muted">4+ *****</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-success mt-5">
          <table className="table text-light">
            <tr>
              <td>
                Address : Sno. 101, Sundar Complex, GM Road, Bangalore, India
              </td>
              <td>About Us</td>
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
export default About;
