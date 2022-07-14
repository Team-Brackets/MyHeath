import React from "react";
import Header from "../../components/navbars/header";
import Sidebar from "../../components/navbars/sidebar";
import { user_client } from "../../constants";

function Profile() {
  const [userDetails, setUserDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getDetails = async () => {
      fetch(
        `https://myhealth-91b4e-default-rtdb.firebaseio.com/${
          user_client.split("@")[0]
        }myhealth.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const docs = [];
          for (const key in data) {
            const doc = {
              id: key,
              ...data[key],
            };
            docs.push(doc);
            let docData = docs;
            setLoading(true);
            setUserDetails(docData);
            setLoading(false);
          }
        });
    };
    getDetails();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="dashboard-container container">
          <div className="col-sm-6 col-md-6 col-lg-6">
            {userDetails.map((data, index) => (
              <div key={index}>
                <div className="mb-3">
                  <label for="text" className="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={data.name}
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
                    value={data.email}
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
                    value={data.phone}
                  />
                </div>
                <div className="mb-3">
                  <label for="text" className="form-label">
                    Relationship Status:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={data.relationship}
                  />
                </div>
                <div className="mb-3">
                  <label for="text" className="form-label">
                    State of Residence:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={data.state_of_residence}
                  />
                </div>
                <div className="mb-3">
                  <label for="text" className="form-label">
                    Local Government Area:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={data.local_government}
                  />
                </div>
                <div className="mb-3">
                  <label for="text" className="form-label">
                    Who do you work for:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={data.who_do_you_work_for}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-border px-5"
              onClick={() => {}}
              type="button"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
