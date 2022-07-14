import React from "react";
import Header from "../../components/navbars/header";
import Sidebar from "../../components/navbars/sidebar";
import { TransactionsData } from "../../dummy";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="dashboard-container  container">
          <div className="row container mb-3 justify-content-between">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="dashboard-card px-3 text-white py-3">
                <div>
                  <h1>Time</h1>
                  <h2>You visited the hospital</h2>
                  <p>Annually</p>
                </div>
                <div className="d-flex justify-content-space-between">
                  <div style={{ fontSize: "40px" }}>
                    5<span style={{ fontSize: "15px" }}>times</span>
                  </div>
                  <div className="circle-graph">
                    <span>
                      <span>Goal</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div
                className="dashboard-card px-3 text-white py-3"
                style={{ backgroundColor: "#2F8DAB" }}
              >
                <div>
                  <h1>Payment</h1>
                  <h2>Out of your Insurance </h2>
                  <p>Ocassionally</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div style={{ fontSize: "40px" }}>65</div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <p>65%</p>
                      <p>45%</p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FD1313",
                        width: "200px",
                        height: "10px",
                        marginLeft: "auto",
                        borderRadius: "20px",
                        marginTop: "-18px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#5A005A",
                          width: "65%",
                          height: "10px",
                          borderRadius: "20px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Recents Transactions</h2>
            <div className="px-4 recent-transactions-card">
              {TransactionsData.map((data, index) => (
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ borderBottom: "1px solid gray" }}
                >
                  <div className="w-25">
                    <p className="header">{data.name}</p>
                    <p>&#8358;{data.fee}</p>
                  </div>
                  <div
                    className="w-25"
                    style={{ textAlign: "right", alignSelf: "center" }}
                  >
                    <p className="header">&#8358;{data.fee}</p>
                    <p>{data.date}</p>
                  </div>
                  <div>
                    <div
                      className={`d-flex align-items-center justify-content-center ${
                        data.type === "renew"
                          ? " bg-white text-dark"
                          : "bg-danger text-white"
                      }`}
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      Fixed
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
