import React from "react";
import "../App.css";
import "animate.css";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col md-3">
            <img
              src="https://www.investopedia.com/thmb/smAt0wcvwa34DrM-0PE3od_BH6s=/680x440/filters:fill(auto,1)/fund-5bfc3776c9e77c00519dc4c9.jpg"
              class="img"
              alt="..."
            />
          </div>
          <div className="col mt-5">
            <div className="card mt-5">
              <h5 className="card-title text-center animate__animated animate__flash mt-4">
                Mutual Funds
              </h5>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card mt-5">
              <h5 className="card-title text-center animate__animated animate__flash mt-4">
                Tax Saver
              </h5>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card mt-5">
              <h5 className="card-title text-center animate__animated animate__flash mt-4">
                ETF Funds
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="text-dark mt-4">
            A mutual fund is a professionally managed investment fund that pools
            money from many investors to purchase securities. The term is
            typically used in the United States, Canada, and India, while
            similar structures across the globe include the SICAV in Europe
            ('investment company with variable capital') and open-ended
            investment company (OEIC) in the UK. Mutual funds are often
            classified by their principal investments: money market funds, bond
            or fixed income funds, stock or equity funds, or hybrid funds. Funds
            may also be categorized as index funds, which are passively managed
            funds that track the performance of an index, such as a stock market
            index or bond market index, or actively managed funds, which seek to
            outperform stock market indices but generally charge higher fees.
            Primary structures of mutual funds are open-end funds, closed-end
            funds, unit investment trusts.
          </p>
          <br />
        </div>
        <div className="row mt-5">
          <div className="container-fluid">
            <p className="placeholder-wave">
              <span className="placeholder col-12 bg-success">
                <h1 className="display-4 text-light text-bold ms-3">
                  Trusted By
                </h1>
                <h1 className="display-4 text-light text-bold ms-3">
                  100+ Users
                </h1>
                <p className="display text-light text-bold ms-3">
                  "We provide best source for INVESTING along with LEARNING"
                </p>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <h1 className="text text-center mt-5 text-success">
            KEEP LEARNING KEEP GROWING BY INVESTING
          </h1>
        </div>
        <div className="row">
          <div className="col mt-5">
            <div className="card-body">
              <img
                src="https://wp-asset.groww.in/wp-content/uploads/2019/09/24162438/For-blog_23Apr_-05.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-text text-center">
                  Beginners Guide To Mutual Funds
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button
              className="btn1 btn-success"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Start Exploring
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Mutual Funds</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body bg-light">
                <div className="d-flex justify-content-start align-items-start mb-4">
                  <span className="material-icons text-primary me-2">
                    chevron_right
                  </span>
                  <span>
                    <h4 className="text-success"> Mutual funds in India</h4>
                    <p>
                      The first introduction of a mutual fund in India occurred
                      in 1963, when the{" "}
                      <abbr title=" The Government of India (ISO: Bhārat Sarkār), often abbreviated as GoI, and also referred to as the Central Government or Union Government or simply the Centre, is the Union government created by the Constitution of India as the legislative, executive and judicial authority to govern the union of twenty eight states and eight union territories. The seat of the government is located in New Delhi, the capital of India.">
                        Government of India
                      </abbr>
                      launched Unit Trust of India (UTI). UTI enjoyed a monopoly
                      in the Indian mutual fund market until 1987, when a host
                      of other government-controlled Indian financial companies
                      established their own funds, including State Bank of
                      India, Canara Bank and by Punjab National Bank.
                      <br />A mutual fund is a type of financial vehicle made up
                      of a pool of money collected from many investors to invest
                      in securities like stocks, bonds, money market
                      instruments, and other assets. Mutual funds are operated
                      by professional money managers, who allocate the fund's
                      assets and attempt to produce capital gains or income for
                      the fund's investors. A mutual fund's portfolio is
                      structured and maintained to match the investment
                      objectives stated in its prospectus.
                    </p>
                  </span>
                </div>

                <div className="d-flex justify-content-start align-items-start mb-4">
                  <span className="material-icons text-primary me-2">
                    chevron_right
                  </span>
                  <span>
                    <h4 className="text-success">Distribution</h4>
                    <p>
                      Mutual funds in India are distributed mainly in 2 ways:-
                      <br />
                      <h5 className="text-success"> Online </h5>
                      Customers can buy mutual funds online via the
                      corresponding asset management company's website or via
                      brokers. There are a number of new platforms that have
                      come which offer direct mutual funds in their platform.
                      Subscribers can buy mutual funds from these platforms.
                      Direct mutual funds provide better returns, generally
                      between .5% to 1.5% more than their regular counterparts.
                      This is due to the fact that brokers charges are excluded
                      from the returns. A 1% deduction from a return of 12% from
                      mutual funds, leads to a 8.33% lesser return to the
                      investor, which is a huge amount.
                      <br />
                      <h5 className="text-success"> Offline </h5>
                      Most of the asset management company have an offline
                      distribution network. These distributors mainly sell
                      regular mutual funds which carry some commission on it.
                      FundsIndia, NJ, Prudent, QFund are some of the popular
                      distributors in India.
                    </p>
                  </span>
                </div>

                <div className="d-flex justify-content-start align-items-start mb-4">
                  <span className="material-icons text-primary me-2">
                    chevron_right
                  </span>
                  <span>
                    <h4 className="text-success"> KEY TAKEAWAYS</h4>
                    <br />
                    <ul>
                      <li>
                        A mutual fund is a type of investment vehicle consisting
                        of a portfolio of stocks, bonds, or other securities.
                      </li>
                      <li>
                        Mutual funds give small or individual investors access
                        to diversified, professionally managed portfolios at a
                        low price.
                      </li>
                      <li>
                        Mutual funds are divided into several kinds of
                        categories, representing the kinds of securities they
                        invest in, their investment objectives, and the type of
                        returns they seek.
                      </li>
                    </ul>
                  </span>
                </div>
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
export default Home;
