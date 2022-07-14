import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/MyHealth.png";
import DROPDOWN_ICON from "../../assets/icons/arrow-down.png";
import { ALT } from "../../constants";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={LOGO} alt={ALT} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item dropdown">
              <Link
                className="nav-link active "
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
                to="#"
              >
                Our health plan
                <img src={DROPDOWN_ICON} alt={ALT} />
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/individual-plan">
                    For Individual
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/business-plan">
                    For Businesses
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/family-plan">
                    For Family
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/senior-citizens-plan">
                    For Senior Citizens
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                FAQS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Get In Touch
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/auth-page"
              >
                {" "}
                <button className="btn btn-border" type="button">
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/auth-page"
              >
                {" "}
                <button className="btn btn-outlined" type="button">
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
