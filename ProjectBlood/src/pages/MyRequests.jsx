import React from 'react'
import { useEffect, useState } from 'react'
import api from '../api'
import { useNavigate, Link } from 'react-router-dom'

function MyRequests() {
    const navigate = useNavigate()
    const [requests, setRequests] = useState([])

    useEffect(() => {
        const fetchMyRequests = async () => {
            try {
                const response = await api.get(
                    "my-requests/"
                )
                setRequests(response.data)
            } catch (error) {
                console.log(error.response?.data)
            }
        }
        fetchMyRequests()
    }, [])

    const deleteRequest = async (requestId)=>{
        try{
            await api.delete(
                `delete-request/${requestId}/`
            )
            alert("Request Deleted Succesfully")
            fetchMyRequests()
        }catch(error){
            console.log(error.response?.data)
        }
    }


return (

        <div className="container mt-4">



            {/* Header */}

            <div className="bg-danger text-white p-4 rounded shadow mb-4">

                <h1>
                    📋 My Blood Requests
                </h1>


                <p className="mb-0">
                    Manage your created blood requests.
                </p>

            </div>





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
                        🩸 <b>Units:</b> {request.units_needed}
                    </p>


                    <p>

                    Status:

                    {" "}

                    <span
                    className={
                        request.status==="Accepted"
                        ?
                        "badge bg-success"
                        :
                        "badge bg-warning text-dark"
                    }
                    >

                    {request.status}

                    </span>


                    </p>





                    <div className="mt-3">


                    <Link
                    className="btn btn-primary me-2"
                    to={`/update-request/${request.id}`}
                    >

                    Update

                    </Link>



                    <button
                    className="btn btn-danger"
                    onClick={()=>deleteRequest(request.id)}
                    >

                    Delete

                    </button>


                    </div>



                    </div>



                </div>



                </div>


            ))}


            </div>




            {
            requests.length === 0 && (

                <div className="text-center mt-5">

                    <h4>
                        No requests created
                    </h4>

                    <p className="text-muted">
                        Create a blood request to see it here.
                    </p>


                </div>

            )
            }



        </div>

    )
}

export default MyRequests