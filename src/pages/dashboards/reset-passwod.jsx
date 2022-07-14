import React from 'react'
import Header from '../../components/navbars/header'
import Sidebar from '../../components/navbars/sidebar'

function ResetPassword() {
    return (
        <div>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                <div className='dashboard-container  container mt-4'>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="mb-3">
                            <label for="oldpassword" className="form-label">Enter Old Password:</label>
                            <input type="text" className="form-control" id="oldpassword" />
                        </div>
                        <div className="mb-3">
                            <label for="newpassword" className="form-label">Enter New Password:</label>
                            <input type="text" className="form-control" id="newpassword" />
                        </div>
                        <div className="mb-3">
                            <label for="confirmpassword" className="form-label">Confirm  New Password:</label>
                            <input type="text" className="form-control" id="confirmpassword" />
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button className="btn btn-border px-5" onClick={() => { }} type="button">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
