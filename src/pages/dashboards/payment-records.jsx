import React from 'react'
import Header from '../../components/navbars/header'
import Sidebar from '../../components/navbars/sidebar'

function PaymentRecords() {
    return (
        <div>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                <div className='dashboard-container  container d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <h3>You don’t have any records of payments yet.</h3>
                        <button className='btn btn-border mt-3 px-5'>Buy Health Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentRecords
