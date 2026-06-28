import React  from 'react'
import { useEffect, useState } from "react"
import api from '../api'

function AcceptedRequests() {

    const [requests,setRequests] = useState([])

    useEffect(()=>{
        const fetchAcceptedRequests =async ()=>{
            try {
                const response = await api.get(
                    'accepted-requests/'
                )
                setRequests(response.data)
            }catch(error) {
                console.log(error.response?.data)
            }
        }

        fetchAcceptedRequests()

    },[])





 return (

        <div className="container mt-4">



            {/* Header */}

            <div className="bg-success text-white p-4 rounded shadow mb-4">

                <h1>
                    ✅ Accepted Requests
                </h1>

                <p className="mb-0">
                    Requests where you agreed to donate blood.
                </p>

            </div>




            {/* Count */}

            <div className="row mb-4">


                <div className="col-md-4">


                    <div className="card shadow border-0 text-center p-3">


                        <h2 className="text-success">

                            {requests.length}

                        </h2>


                        <p className="mb-0">
                            Accepted Donations
                        </p>


                    </div>


                </div>


            </div>





            {/* Cards */}


            <div className="row">


            {requests.map((request)=>(


                <div
                className="col-md-6 mb-4"
                key={request.id}
                >


                    <div className="card shadow border-0 h-100">


                        <div className="card-body">



                            <div className="d-flex justify-content-between">


                                <h4>

                                    {request.patient_name}

                                </h4>


                                <span className="badge bg-danger">

                                    {request.blood_group}

                                </span>


                            </div>




                            <hr/>




                            <p>
                                🏥 <b>Hospital:</b> {request.hospital}
                            </p>


                            <p>
                                📍 <b>Location:</b> {request.location}
                            </p>


                            <p>
                                📞 <b>Contact:</b> {request.contact_number}
                            </p>


                            <p>
                                🩸 <b>Units:</b> {request.units_needed}
                            </p>



                            <p>

                            Status:

                            {" "}


                            <span className="badge bg-success">

                                {request.status}

                            </span>


                            </p>



                        </div>


                    </div>


                </div>



            ))}



            </div>





            {
                requests.length === 0 && (

                    <div className="text-center mt-5">

                        <h4>
                            No accepted requests yet
                        </h4>

                        <p className="text-muted">

                            Accept a blood request to see it here.

                        </p>

                    </div>

                )
            }



        </div>


    )
}

export default AcceptedRequests