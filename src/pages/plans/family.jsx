import React from "react";
import Navbar from "../../components/navbars/navbar";
import Footer from "../../components/footer";

import FAMILY_IMAGE from "../../assets/family.png";
import { ALT } from "../../constants";
import Whyus from "../../components/Whyus";

function FamilyPlan() {
  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <div className="text-center mt-3 mb-5">
          <h2 style={{ color: "#216378" }}>
            Affordable and quality Family plans for you and your family
          </h2>
          <p>
            We have the right group plans to help you keep you and your family
            healthy and happy.
          </p>
          <img src={FAMILY_IMAGE} width="100%" height="100%" alt={ALT} />
        </div>
        <Whyus />
        <div className="text-center mt-5">
          <button className="btn btn-border px-5">Get a Qoutes</button>
        </div>
        <div className="text-center mt-5 mb-5">
          <h2 style={{ color: "#216378" }}>Plans And Pricing</h2>
          <p>Select the plan that works for you best</p>
          <div>
            <button className="btn btn-border px-5 py-3 w-25">Monthly</button>
            <button className="btn btn-outlined px-5 py-3 w-25">
              Quarterly
            </button>
            <button className="btn btn-outlined px-5 py-3 w-25">Yearly</button>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="plans-card text-center">
                <h3>Silver Package</h3>
                <hr />
                <p>&#8358;2500 Per Person</p>
                <hr />
                <h3>Details</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                </ul>
                <button className="btn btn-border">Buy Now</button>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="plans-card text-center">
                <h3>Gold Package</h3>
                <hr />
                <p>&#8358;4500 Per Person</p>
                <hr />
                <h3>Details</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                </ul>
                <button className="btn btn-border">Buy Now</button>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="plans-card text-center">
                <h3>Platinum Package</h3>
                <hr />
                <p>&#8358;7000 Per Person</p>
                <hr />
                <h3>Details</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    amet consectetur leo leo et.
                  </li>
                </ul>
                <button className="btn btn-border">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FamilyPlan;
