import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'


function CreateRequest() {


    const navigate = useNavigate()



    const [formData, setFormData] = useState({

        patient_name: "",
        blood_group: "",
        hospital: "",
        location: "",
        contact_number: "",
        units_needed: "",
        urgency: ""

    })





    const handleChange = (e)=>{


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        })


    }







    const handleSubmit = async(e)=>{


        e.preventDefault()



        try{


            await api.post(

                "blood-request/",

                formData

            )



            alert("Blood Request Created Successfully")



            navigate("/my-requests")



        }catch(error){


            console.log(error.response?.data)


            alert("Failed to create request")


        }


    }







    return (


<div className="container mt-5">



<div

className="card shadow border-0 mx-auto p-4"

style={{maxWidth:"600px"}}

>




<div className="text-center mb-4">


<h2>

🩸 Create Blood Request

</h2>


<p className="text-muted">

Request blood during emergency situations

</p>


</div>






<form onSubmit={handleSubmit}>





<input

type="text"

name="patient_name"

placeholder="Patient Name"

className="form-control mb-3"

onChange={handleChange}

/>







<select

name="blood_group"

className="form-control mb-3"

onChange={handleChange}

>


<option value="">

Select Blood Group

</option>


<option>A+</option>

<option>A-</option>

<option>B+</option>

<option>B-</option>

<option>O+</option>

<option>O-</option>

<option>AB+</option>

<option>AB-</option>


</select>







<input

type="text"

name="hospital"

placeholder="Hospital Name"

className="form-control mb-3"

onChange={handleChange}

/>







<input

type="text"

name="location"

placeholder="Location"

className="form-control mb-3"

onChange={handleChange}

/>







<input

type="text"

name="contact_number"

placeholder="Contact Number"

className="form-control mb-3"

onChange={handleChange}

/>







<input

type="number"

name="units_needed"

placeholder="Units Needed"

className="form-control mb-3"

onChange={handleChange}

/>







<select

name="urgency"

className="form-control mb-4"

onChange={handleChange}

>


<option value="">

Select Urgency

</option>


<option value="High">

High

</option>


<option value="Medium">

Medium

</option>


<option value="Low">

Low

</option>


</select>








<button

className="btn btn-danger w-100 rounded-pill"

type="submit"

>


Create Request


</button>





</form>





</div>




</div>


    )

}



export default CreateRequest