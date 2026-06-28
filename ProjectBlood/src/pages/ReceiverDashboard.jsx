import React from 'react'
import { Link } from 'react-router-dom'

function ReceiverDashboard() {

    return (
        <div className="container mt-4">

            <div className="bg-danger text-white p-4 rounded shadow mb-4">
                <h1>🏥 Receiver Dashboard</h1>
                <p className="mb-0">
                    Manage your blood requests and connect with donors.
                </p>
            </div>

            <div className="row">

                <div className="col-md-6 mb-3">
                    <div className="card shadow border-0 h-100">

                        <div className="card-body text-center">

                            <h3>🩸</h3>

                            <h5>Create Blood Request</h5>

                            <p>
                                Create a new blood request for patients in need.
                            </p>

                            <Link
                                className="btn btn-danger"
                                to="/create-request"
                            >
                                Create Request
                            </Link>

                        </div>

                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card shadow border-0 h-100">

                        <div className="card-body text-center">

                            <h3>📋</h3>

                            <h5>My Requests</h5>

                            <p>
                                View, update and manage your requests.
                            </p>

                            <Link
                                className="btn btn-primary"
                                to="/my-requests"
                            >
                                View Requests
                            </Link>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ReceiverDashboard