import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/MyHealth.png";
import { ALT, user_client } from "../../constants";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Welcome
                <br />
                <span style={{ color: "#2F8DAB", fontWeight: "600" }}>
                  MR {user_client?.slice(0, 9).toLocaleUpperCase()}...
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
