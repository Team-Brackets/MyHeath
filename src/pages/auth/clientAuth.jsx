import React from "react";
import { ALT } from "../../constants";

import LOGO from "../../assets/MyHealth.png";
import CAMERA_ICONS from "../../assets/icons/camera.png";
import SuccessRes from "../../components/successfully";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import initializeAuthentication from "../../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function ClientLoginAuth() {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const actionCodeSettings = {
    url: "https://my-health.vercel.app/auth/sign-up",
    // This must be true.
    handleCodeInApp: true,
    rewrites: [
      {
        source: "/**", // Dynamic Links start with "https://links.example.com/"
        dynamicLinks: true,
      },
    ],
  };
  const userMail = userDetails.email;

  initializeAuthentication();
  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendSignInLinkToEmail(auth, userMail, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", userMail);
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="login-card py-4">
            <div className="text-center">
              <img src={LOGO} alt={ALT} />
              <p className="mt-3 mb-3">Log In into your account</p>
            </div>
            <form className="m-4" onSubmit={submitHandler}>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Enter Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, email: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Enter Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="text-center mt-4 ">
                <button className="btn btn-border w-75 m-auto">Log In</button>
                <p className="mt-3">
                  Forgot Password? <a href="#">Click here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientSignUpAuth() {
  const [movementSecond, setMovementSecond] = React.useState(false);
  const [movementThird, setMovementThird] = React.useState(false);
  const [res, setRes] = React.useState(false);

  const [userDetails, setUserDetails] = React.useState({
    email: "",
    name: "",
    phone: "",
    image: "",
    relationship: "",
    state_of_residence: "",
    city: "",
    local_government: "",
    employment_status: "",
    who_do_you_work_for: "",
    identification_type: "",
    identification_image: "",
    preferred_hospital: "",
  });
  const navigate = useNavigate();

  const actionCodeSettings = {
    url: "https://my-health.vercel.app/auth/sign-up",
    // This must be true.
    handleCodeInApp: true,
    rewrites: [
      {
        source: "/**", // Dynamic Links start with "https://links.example.com/"
        dynamicLinks: true,
      },
    ],
  };
  const userMail = userDetails.email;

  initializeAuthentication();
  const submitHandler = (e) => {
    e.preventDefault();
    const res = axios.post(
      `https://myhealth-91b4e-default-rtdb.firebaseio.com/${
        userMail.split("@")[0]
      }myhealth.json`,
      userDetails
    );
    if (res) {
      const auth = getAuth();
      sendSignInLinkToEmail(auth, userMail, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem("emailForSignIn", userMail);
          setRes(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };

  React.useEffect(() => {
    return () => {
      const auth = getAuth();
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          console.log("no email fouund");
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem("emailForSignIn");
            console.log("result");

            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, []);

  return (
    <div className="container py-4">
      <div className="text-center mt-3">
        <img src={LOGO} alt={ALT} />
        <h2 className="mt-3 mb-3">
          {movementSecond && !movementThird
            ? "Almost there!"
            : movementThird && movementSecond
            ? "Kindly fill the last form."
            : "Beneficiary Sign Up Form"}
        </h2>
        {!movementSecond && (
          <p style={{ textAlign: "left" }}>
            Please proceed to fill the following form to become a beneficiary:
          </p>
        )}
        <div className="movements mt-5 mb-5" style={{ textAlign: "left" }}>
          <div className="movement active"></div>
          <div
            className={`movement second ${movementSecond && "active"}`}
          ></div>
          <div className={`movement third ${movementThird && "active"}`}></div>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        {" "}
        {!movementSecond && !movementThird && (
          <div>
            <div className="mb-3">
              <div className="file-uploader">
                <label for="file" className="btn btn-border">
                  Upload
                </label>
                <input
                  type="file"
                  className="form-control d-none"
                  id="file"
                  placeholder="name@example.com"
                />
                <label for="file">
                  <img src={CAMERA_ICONS} width="40px" alt={ALT} />
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="mb-3">
                <label for="text" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Sulyman Ridwan"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, name: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, email: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="081200000000"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, phone: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="btn btn-border px-5"
                onClick={() => setMovementSecond(true)}
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {movementSecond && !movementThird && (
          <div className="mb-3">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="mb-3">
                <label for="text" className="form-label">
                  Relationship Status:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      relationship: e.target.value,
                    });
                  }}
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  State of Residence:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      state_of_residence: e.target.value,
                    });
                  }}
                >
                  <option selected>Select your State</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Osun">Osun</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  City of Residence:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, city: e.target.value });
                  }}
                >
                  <option value="Ilorin">Ilorin</option>
                  <option value="Ilorin">Ilorin</option>
                  <option value="Ilorin">Ilorin</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  Local Government Area:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      local_government: e.target.value,
                    });
                  }}
                >
                  <option value="Ilorin West">Ilorin West</option>
                  <option value="Ilorin East">Ilorin East</option>
                  <option value="Ilorin South">Ilorin South</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  Employment Status:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      employment_status: e.target.value,
                    });
                  }}
                >
                  <option value="Employed">Employed</option>
                  <option value="Unemployed">UnEmployed</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  Who do you work for:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      who_do_you_work_for: e.target.value,
                    });
                  }}
                >
                  <option value="State Government">State Government</option>
                  <option value="MySlef">Myself</option>
                  <option value="Federal Government">Federal Government</option>
                </select>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="btn btn-border px-5"
                onClick={() => setMovementThird(true)}
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        )}{" "}
        {movementThird && (
          <div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="mb-3">
                <label for="text" className="form-label">
                  Identification Type:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      identification_type: e.target.value,
                    });
                  }}
                >
                  <option value="National ID Card">National ID card</option>
                  <option value="Voter ID Card">Voter ID card</option>
                  <option value="Student ID Card">Student ID card</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="identification" className="form-label">
                  Upload a valid means of identification:
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="identification"
                />
              </div>
              <div className="mb-3">
                <label for="text" className="form-label">
                  Select your preferred hospital:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      preferred_hospital: e.target.value,
                    });
                  }}
                >
                  <option value="Peace Hospital">Peace Hospital</option>
                  <option value="Asa dam Hospital">Asa-dam Hospital</option>
                </select>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-border px-5" type="submit">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>

      {res && <SuccessRes />}
    </div>
  );
}
