import React from 'react'
import { Link } from 'react-router-dom'

function DonorDashboard() {

    return (
        <div className="container mt-4">

            {/* Hero Section */}
            <div className="bg-danger text-white p-4 rounded shadow mb-4">
                <h1>🩸 Donor Dashboard</h1>
                <p className="mb-0">
                    Help save lives by responding to blood requests.
                </p>
            </div>

            <div className="row">

                {/* View Blood Requests */}
                <div className="col-md-4 mb-3">
                    <div className="card shadow border-0 h-100">

                        <div className="card-body text-center">

                            <h3>🩸</h3>

                            <h5>View Blood Requests</h5>

                            <p>
                                Browse blood requests and help patients in need.
                            </p>

                            <Link
                                className="btn btn-danger"
                                to="/dashboard"
                            >
                                View Requests
                            </Link>

                        </div>

                    </div>
                </div>

                {/* Accepted Requests */}
                <div className="col-md-4 mb-3">
                    <div className="card shadow border-0 h-100">

                        <div className="card-body text-center">

                            <h3>📋</h3>

                            <h5>Accepted Requests</h5>

                            <p>
                                View and manage requests you have accepted.
                            </p>

                            <Link
                                className="btn btn-primary"
                                to="/accepted-requests"
                            >
                                Accepted Requests
                            </Link>

                        </div>

                    </div>
                </div>

                {/* Search Donors */}
                <div className="col-md-4 mb-3">
                    <div className="card shadow border-0 h-100">

                        <div className="card-body text-center">

                            <h3>🔍</h3>

                            <h5>Search Donors</h5>

                            <p>
                                Search donors by blood group and location.
                            </p>

                            <Link
                                className="btn btn-success"
                                to="/search-donors"
                            >
                                Search Donors
                            </Link>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default DonorDashboard