import React from "react";
import { ALT } from "../constants";
import { why_us } from "../dummy";

function Whyus() {
  return (
    <div>
      <div className="why-us mt-4 mb-4">
        <h2 className="text-center">Why Us</h2>
        <div className="row justify-content-center">
          {why_us.map((data, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4 mt-5" key={index}>
                <div className="card-container text-center">
                  <div>
                    <img src={data.image} alt={ALT} width="40px" />
                    <p className="w-75 m-auto">{data.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Whyus;
