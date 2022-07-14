import React from "react";
import Navbar from "../../components/navbars/navbar";
import Footer from "../../components/footer";

import BUSINESS_IMAGE from "../../assets/business.png";
import { ALT } from "../../constants";
import Whyus from "../../components/Whyus";
function BussinessPlan() {
  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <div className="text-center mt-3 mb-5">
          <h2 style={{ color: "#216378" }}>
            Affordable and quality corporate plans for your businesses
          </h2>
          <p>
            Let’s insure your employees and workers, in order to ensure perfect
            work efficiency
          </p>
          <img src={BUSINESS_IMAGE} width="100%" height="100%" alt={ALT} />
        </div>
        <Whyus />
        <div className="text-center mt-5">
          <button className="btn btn-border px-5">Get a Qoutes</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BussinessPlan;
