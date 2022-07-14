import React from "react";
import Navbar from "../components/navbars/navbar";
import { ALT, user_client } from "../constants";
import { health_plans } from "../dummy";

import LIST_ONE from "../assets/icons/list-1.png";
import LIST_TWO from "../assets/icons/list-2.png";
import LIST_THREE from "../assets/icons/list-3.png";
import LIST_FOUR from "../assets/icons/list-4.png";
import PLUS_ICON from "../assets/icons/plus.png";
import HEADER_IMAGE from "../assets/family.png";
import Footer from "../components/footer";
import GetInTouch from "../components/getInTouch";
import Whyus from "../components/Whyus";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container home-page">
        <div className="top-section">
          <div className="row mt-5">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h1>
                The right quality and affordable insurance plans for you, your
                family and your business.
              </h1>
              <p>
                Let us help you make the right choices in insuring your health.
                We offer the best services that are affordable. You don’t have
                to break your bank in order to have quality life insurance.
              </p>
              <button
                className="btn btn-border px-5"
                onClick={() =>
                  navigate(user_client ? "/dashboard" : "/auth-page")
                }
              >
                Get Started
              </button>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 top-image">
              <img src={HEADER_IMAGE} alt={ALT} width="100%" />
            </div>
          </div>
          <div className="health-plans mb-5 pt-3">
            <h2 className="text-center mt-2 mb-2">Our Health Plans</h2>
            <div className="row mt-2">
              {health_plans.map((data, index) => {
                return (
                  <div className="col-sm-6 col-md-6 col-lg-6 mt-5" key={index}>
                    <div className="card-container text-center">
                      <div>
                        <img
                          src={data.image}
                          width="280px"
                          alt={ALT}
                          className="mb-3"
                        />
                        <h2>{data.title}</h2>
                        <p>{data.content}</p>
                        <a href={data.url}>
                          <button className="btn btn-outlined mt-2">
                            Learn More
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Whyus />
        <GetInTouch />
        <div className="faqs">
          <h2 className="text-center mt-5 mb-3">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div>
              <div className="d-flex align-items-center justify-content-between inner-faq mt-2">
                <div className="d-flex align-items-center justify-content-between faq-content">
                  <img src={LIST_ONE} alt={ALT} width="25px" />
                  <p className="mt-3">
                    How do I change my email and state of residence?
                  </p>
                </div>
                <img src={PLUS_ICON} alt={ALT} width="35px" />
              </div>
              <div className="d-flex align-items-center justify-content-between inner-faq mt-4">
                <div className="d-flex align-items-center justify-content-between faq-content">
                  <img src={LIST_TWO} alt={ALT} width="25px" />
                  <p className="mt-3">
                    How do I change or upgrade my health plan?
                  </p>
                </div>
                <img src={PLUS_ICON} alt={ALT} width="35px" />
              </div>
              <div className="d-flex align-items-center justify-content-between inner-faq mt-4">
                <div className="d-flex align-items-center justify-content-between faq-content">
                  <img src={LIST_THREE} alt={ALT} width="25px" />
                  <p className="mt-3">How do I cancel my health plan?</p>
                </div>
                <img src={PLUS_ICON} alt={ALT} width="35px" />
              </div>
              <div className="d-flex align-items-center justify-content-between inner-faq mt-4">
                <div className="d-flex align-items-center justify-content-between faq-content">
                  <img src={LIST_FOUR} alt={ALT} width="25px" />
                  <p className="mt-3">
                    I mistakenly deactivated my health plan, how do I correct
                    this?
                  </p>
                </div>
                <img src={PLUS_ICON} alt={ALT} width="35px" />
              </div>
              <div className="mb-5 mt-4 text-center">
                <button className="btn btn-border px-5">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
