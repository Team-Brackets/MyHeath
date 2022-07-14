import React from 'react';
import { useNavigate } from 'react-router-dom';


import LOGO from "../assets/MyHealth.png";
import { ALT } from '../constants';

function SuccessRes() {
    const navigate = useNavigate();
    return (
        <div className="container response-modal">
            <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="login-card py-4">
                        <div className="text-center">
                            <img src={LOGO} alt={ALT} />
                            <p className="mt-3 mb-3">You’ve successfully registered!</p>
                            <p className="mt-3 mb-3">Please click on the link sent to your email to verify your account.</p>
                        </div>
                        <div className='text-center mt-4 '>
                            <button className="btn btn-border w-75 m-auto" onClick={() => navigate('/')}>Go back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SuccessRes
