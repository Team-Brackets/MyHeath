import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbars/navbar";
import Footer from "../../components/footer";
import { ALT } from "../../constants";

import INDIVIDUAL_CITIZEN from "../../assets/individual.png";
import HOSPITAL from "../../assets/doctor.png";

function AuthPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="auth-page py-3">
          <div className="text-center mt-3 mb-5">
            <h2>Pick an option that applies to you.</h2>
            <p>
              Select the option that best describes you and log in to the
              platform
            </p>
          </div>
          <div className="row justify-content-center my-4 text-center">
            <div className="col-sm-6 col-md-5 col-lg-5">
              <div className="authPage-Card py-3 px-2 mt-2">
                <div>
                  <img src={INDIVIDUAL_CITIZEN} width="100%" alt={ALT} />
                  <h3 className="mt-2">Clients</h3>
                  <p>Register as a client and get access to our services.</p>
                  <div className="d-flex justify-content-between flex-column w-50 m-auto">
                    <button
                      type="button"
                      className="btn btn-outlined"
                      onClick={() => {
                        navigate("/auth/login");
                      }}
                    >
                      Log In
                    </button>
                    <button
                      type="button"
                      className="btn btn-border mt-2"
                      onClick={() => {
                        navigate("/auth/sign-up");
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-5">
              <div className="authPage-Card py-3 px-2 mt-2">
                <div>
                  <img src={HOSPITAL} width="100%" alt={ALT} />
                  <h3 className="mt-2">Hospitals</h3>
                  <p>
                    The best hospitals love us as we offer premium benefits.
                  </p>
                  <div className="d-flex justify-content-between flex-column w-50 m-auto">
                    <button type="button" className="btn btn-outlined">
                      Log In
                    </button>
                    <button type="button" className="btn btn-border mt-2">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthPage;
