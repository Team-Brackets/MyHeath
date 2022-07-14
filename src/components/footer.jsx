import React from 'react'
import { ALT } from '../constants'

import COPYRIGHT from '../assets/icons/copyright.png';

function Footer() {
    return (
        <footer className="py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div>
                            <h3 className="mb-3">MyHealth</h3>
                            <p>We are a health insurance company that aims and linking people with the best possible health care. We help people insure their health at affordable prices.
                                Insure yourself, your families, businesses and even older people.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <ul>
                            <li className="mb-3">Quick Link</li>
                            <li>About Us</li>
                            <li>Our Health Plans</li>
                            <li>FAQs</li>
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <ul>
                            <li className="mb-3">Contact:</li>
                            <li>No 15, Adigun Arowoo Street, Ilorin, Kwara State.</li>
                            <li>+234-810-786-9088</li>
                            <li>helloMyHealth@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <img src={COPYRIGHT} alt={ALT} width="20px" />
                    <span>{new Date().getFullYear()} All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
