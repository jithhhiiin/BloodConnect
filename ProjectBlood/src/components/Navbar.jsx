import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const role = localStorage.getItem("role")
  const token = localStorage.getItem("access_token")

  const navigate = useNavigate()


  const handleLogout = () => {

    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("role")

    navigate("/")

  }



  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">

      <div className="container">


        {/* Brand */}

        <Link
          className="navbar-brand fw-bold fs-4"
          to="/"
        >
          🩸 BloodConnect
        </Link>




        <div className="navbar-nav ms-auto align-items-center">



          {/* Public User */}

          {!token && (

            <>

              <Link
                className="nav-link mx-2"
                to="/"
              >
                🏠 Home
              </Link>


              <Link
                className="nav-link mx-2"
                to="/login"
              >
                Login
              </Link>


              <Link
                className="nav-link mx-2"
                to="/register"
              >
                Register
              </Link>


            </>

          )}






          {/* Donor */}

          {role === "donor" && (

            <>

              <Link
                className="nav-link mx-2"
                to="/donor-dashboard"
              >
                Dashboard
              </Link>


              <Link
                className="nav-link mx-2"
                to="/accepted-requests"
              >
                Accepted Requests
              </Link>


              <Link
                className="nav-link mx-2"
                to="/search-donors"
              >
                Search Donors
              </Link>


            </>

          )}






          {/* Receiver */}

          {role === "receiver" && (

            <>

              <Link
                className="nav-link mx-2"
                to="/receiver-dashboard"
              >
                Dashboard
              </Link>


              <Link
                className="nav-link mx-2"
                to="/create-request"
              >
                Create Request
              </Link>


              <Link
                className="nav-link mx-2"
                to="/my-requests"
              >
                My Requests
              </Link>


            </>

          )}






          {token && (

            <button

              className="btn btn-light rounded-pill ms-3 px-4"

              onClick={handleLogout}

            >

              Logout

            </button>

          )}



        </div>


      </div>


    </nav>

  )

}


export default Navbar