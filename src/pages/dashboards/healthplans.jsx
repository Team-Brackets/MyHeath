import React from "react";
import Header from "../../components/navbars/header";
import Sidebar from "../../components/navbars/sidebar";
import PaymentButton from "../../components/paymentButton";

function Healthplans() {
  const [buyPlan, setBuyPlan] = React.useState(false);
  const [planDetails, setPlanDetails] = React.useState({
    plan: "",
    package: "",
    price: "",
  });
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="dashboard-container  container d-flex align-items-center justify-content-center">
          {!buyPlan ? (
            <div className="text-center">
              <h3>
                You don’t have any health plans. Click the button below to buy a
                new health plan
              </h3>
              <button
                className="btn btn-border mt-3 px-5"
                onClick={() => setBuyPlan(true)}
              >
                Buy Health Plan
              </button>
            </div>
          ) : (
            <>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <>
                  <div className="mb-3">
                    <label for="text" className="form-label">
                      Select Plans:
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setPlanDetails({
                          ...planDetails,
                          plan: e.target.value,
                        });
                      }}
                    >
                      <option value="For Individual">For Individual</option>
                      <option value="For Business">For Business</option>
                      <option value="For Family">For Family</option>
                      <option value="For Senior Citizens">
                        For Senior Citizens
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="text" className="form-label">
                      Select Packages:
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setPlanDetails({
                          ...planDetails,
                          packages: e.target.value,
                        });
                      }}
                    >
                      <option value="Silver">Silver package</option>
                      <option value="Gold">Gold package</option>
                      <option value="For Family">Platinum package</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="confirmpassword" className="form-label">
                      Price:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="confirmpassword"
                      value="2500"
                      readOnly
                      onChange={(e) => {
                        setPlanDetails({
                          ...planDetails,
                          price: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <PaymentButton price={planDetails.price} />
                </>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Healthplans;
