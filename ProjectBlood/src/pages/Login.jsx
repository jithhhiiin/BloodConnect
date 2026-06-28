import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import api from '../api'

function Login() {

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        loginData
      )
      localStorage.setItem(
        "access_token",
        response.data.access
      )
      localStorage.setItem(
        "refresh_token",
        response.data.refresh
      )
      const profileResponse = await api.get(
        "profile/"
      )

      console.log(profileResponse.data)

      const user = profileResponse.data

      localStorage.setItem(
        "role",
        user.role
      )

      if (user.role === "donor") {

        navigate("/donor-dashboard")

      } else {

        navigate("/receiver-dashboard")

      }


    } catch (error) {
      alert("Login Failed")
    }
  }


return (

<div className="container mt-5">

    <div 
        className="card shadow border-0 mx-auto p-4"
        style={{maxWidth:"450px"}}
    >

        <div className="text-center mb-4">

            <h2>
                🩸 BloodConnect
            </h2>

            <p className="text-muted">
                Login to continue
            </p>

        </div>


        <form onSubmit={handleSubmit}>


            <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control mb-3"
                onChange={handleChange}
            />



            <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-4"
                onChange={handleChange}
            />



            <button
                type="submit"
                className="btn btn-danger w-100 rounded-pill"
            >

                Login

            </button>



        </form>


    </div>


</div>

)
}

export default Login