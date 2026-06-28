import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    return (

        <div>


            {/* Hero Section */}

            <section className="bg-danger text-white p-5">

                <div className="container">

                    <div className="row align-items-center">


                        <div className="col-md-7">


                            <h1 className="display-3 fw-bold">
                                🩸 BloodConnect
                            </h1>


                            <p className="lead mt-3">

                                Connecting blood donors with people
                                who need help during emergencies.

                            </p>


                            <p>

                                Find donors, request blood,
                                and become a part of a life-saving
                                community.

                            </p>



                            <div className="mt-4">


                                <Link
                                    className="btn btn-light btn-lg rounded-pill px-4 me-3"
                                    to="/register"
                                >
                                    Join Now
                                </Link>



                                <Link
                                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                                    to="/login"
                                >
                                    Login
                                </Link>


                            </div>


                        </div>



                        <div className="col-md-5 text-center">

                            <div
                                style={{
                                    fontSize:"150px"
                                }}
                            >
                                ❤️
                            </div>

                        </div>


                    </div>

                </div>


            </section>





            {/* Features */}


            <section className="container mt-5">


                <h2 className="text-center fw-bold mb-4">

                    Why BloodConnect?

                </h2>



                <div className="row">



                    <div className="col-md-4 mb-3">


                        <div className="card shadow border-0 h-100">

                            <div className="card-body text-center">


                                <h1>
                                    🔍
                                </h1>


                                <h4>
                                    Find Donors
                                </h4>


                                <p>

                                    Search available donors
                                    based on blood group
                                    and location.

                                </p>


                            </div>


                        </div>


                    </div>





                    <div className="col-md-4 mb-3">


                        <div className="card shadow border-0 h-100">


                            <div className="card-body text-center">


                                <h1>
                                    🏥
                                </h1>


                                <h4>
                                    Emergency Requests
                                </h4>


                                <p>

                                    Create blood requests
                                    and connect with donors
                                    quickly.

                                </p>


                            </div>


                        </div>


                    </div>






                    <div className="col-md-4 mb-3">


                        <div className="card shadow border-0 h-100">


                            <div className="card-body text-center">


                                <h1>
                                    🤝
                                </h1>


                                <h4>
                                    Save Lives
                                </h4>


                                <p>

                                    Every donation can help
                                    someone in need.

                                </p>


                            </div>


                        </div>


                    </div>



                </div>


            </section>




            {/* Bottom CTA */}


            <section className="container mt-5 mb-5">


                <div className="bg-dark text-white rounded shadow p-5 text-center">


                    <h2>
                        Ready to make a difference?
                    </h2>


                    <p>
                        Join BloodConnect today.
                    </p>



                    <Link
                        className="btn btn-danger rounded-pill px-5"
                        to="/register"
                    >
                        Get Started
                    </Link>


                </div>


            </section>


        </div>


    )

}


export default Home