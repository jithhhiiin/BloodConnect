import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register() {


    const navigate = useNavigate()



    const [formData, setFormData] = useState({

        username: "",
        email: "",
        password: "",
        blood_group: "",
        location: "",
        role: ""

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


            await axios.post(

                "http://127.0.0.1:8000/api/register/",

                formData

            )



            alert("Registration Successful")


            navigate("/login")



        }catch(error){



            console.log(error.response?.data)


            alert("Registration Failed")



        }


    }






    return (


<div className="container mt-5">



<div
className="card shadow border-0 mx-auto p-4"
style={{maxWidth:"500px"}}
>




<div className="text-center mb-4">


<h2>
🩸 Create Account
</h2>


<p className="text-muted">

Join BloodConnect community

</p>


</div>





<form onSubmit={handleSubmit}>


<input

type="text"

name="username"

placeholder="Username"

className="form-control mb-3"

value={formData.username}

onChange={handleChange}

/>





<input

type="email"

name="email"

placeholder="Email"

className="form-control mb-3"

value={formData.email}

onChange={handleChange}

/>







<input

type="password"

name="password"

placeholder="Password"

className="form-control mb-3"

value={formData.password}

onChange={handleChange}

/>






<input

type="text"

name="blood_group"

placeholder="Blood Group (Example: A+)"

className="form-control mb-3"

value={formData.blood_group}

onChange={handleChange}

/>







<input

type="text"

name="location"

placeholder="Location"

className="form-control mb-3"

value={formData.location}

onChange={handleChange}

/>






<select

name="role"

className="form-control mb-4"

value={formData.role}

onChange={handleChange}

>


<option value="">

Select Role

</option>


<option value="donor">

Donor

</option>



<option value="receiver">

Receiver

</option>



</select>








<button

type="submit"

className="btn btn-danger w-100 rounded-pill"

>


Register


</button>





</form>




</div>



</div>


    )

}


export default Register