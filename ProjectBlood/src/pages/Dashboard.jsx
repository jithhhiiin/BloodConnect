import React, { useState } from 'react'
import { useEffect } from 'react'
import api from '../api'

function Dashboard() {

    const [requests, setRequests] = useState([])

    useEffect(()=>{
        fetchRequest()
    },[])



    const fetchRequest = async () => {
        try{
            const response = await api.get(
                  "blood-requests/"
              )
              setRequests(response.data)
        }catch (error){
             console.log(error.response.data)
          }
      }



    console.log(requests)

    const acceptRequest = async (requestId)=>{

      try {
        const response = await api.post(
          `accept-request/${requestId}/`
        )
        alert (response.data.message)
        fetchRequest()

      }catch (error){
        console.log(error.response?.data)
      }
    }


 return (
  <div className="container mt-4">


    {/* Header */}

    <div className="bg-danger text-white p-5 rounded shadow mb-4">

      <h1>
        🩸 BloodConnect
      </h1>

      <p className="mb-0">
        Connecting blood donors with patients in need.
      </p>

    </div>



    {/* Statistics */}

    <div className="row mb-4">


      <div className="col-md-4">

        <div className="card shadow border-0 text-center p-3">

          <h2 className="text-danger">
            {requests.length}
          </h2>

          <p className="mb-0">
            Total Blood Requests
          </p>

        </div>

      </div>


    </div>




    {/* Request Cards */}


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


            <span className="badge bg-danger fs-6">

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
            🩸 <b>Units Needed:</b> {request.units_needed}
          </p>


          <p>
            ⚡ <b>Urgency:</b> {request.urgency}
          </p>



          <p>

            Status:

            {" "}

            <span
              className={
                request.status === "Accepted"
                ?
                "badge bg-success"
                :
                "badge bg-warning text-dark"
              }
            >

            {request.status}

            </span>


          </p>



          {
          request.status === "Pending" && (

            <button
              className="btn btn-success w-100 rounded-pill"
              onClick={()=>acceptRequest(request.id)}
            >

              Accept Request

            </button>

          )
          }



        </div>


      </div>


      </div>


    ))}


    </div>



  </div>
)
}

export default Dashboard