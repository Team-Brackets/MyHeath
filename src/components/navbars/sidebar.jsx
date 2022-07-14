import React from "react";
import { getAuth, signOut } from "firebase/auth";

import { ALT } from "../../constants";

import USER_ICON from "../../assets/icons/user.png";
import LOCK_ICON from "../../assets/icons/lock-password.png";
import HELP_ICON from "../../assets/icons/help.png";
import LIST_ICON from "../../assets/icons/list.png";
import LOGOUT_ICON from "../../assets/icons/log-out.png";
import HEALTH_ICON from "../../assets/icons/health.png";
import { Link, useNavigate } from "react-router-dom";

import initializeAuthentication from "../../firebase";

function Sidebar() {
  const navigate = useNavigate();

  initializeAuthentication();
  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          <Link to="#">
            <div>
              <img src={USER_ICON} alt={ALT} />
              <span>My Profile</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/my-health-plans">
            <div>
              <img src={HEALTH_ICON} alt={ALT} />
              <span>My Health Plan</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/my-payment-records">
            <div>
              <img src={LIST_ICON} alt={ALT} />
              <span>My Payment Records</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/reset-password">
            <div>
              <img src={LOCK_ICON} alt={ALT} />
              <span>Password Settings</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div>
              <img src={HELP_ICON} alt={ALT} />
              <span>Support</span>
            </div>
          </Link>
        </li>
        <li
          style={{ marginTop: "35vh", cursor: "pointer" }}
          onClick={logoutHandler}
        >
          <>
            <div>
              <img src={LOGOUT_ICON} alt={ALT} />
              <span style={{ color: "#FD1313" }}>Logut</span>
            </div>
          </>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
