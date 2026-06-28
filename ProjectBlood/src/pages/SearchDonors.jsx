import React, { useState } from 'react'
import api from '../api'

function SearchDonors() {

    const [bloodGroup, setBloodGroup] = useState("")
    const [location, setLocation] = useState("")
    const [donors, setDonors] = useState([])

    const handleSearch = async () => {

        try {

            const response = await api.get(
                `search-donors/?blood_group=${bloodGroup}&location=${location}`
            )

            setDonors(response.data)

        } catch (error) {

            console.log(error.response?.data)

        }

    }

    return (
        <div className="container mt-3">

            <h2>Search Donors</h2>

            <input
                type="text"
                placeholder="Blood Group"
                className="form-control mb-2"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
            />

            <input
                type="text"
                placeholder="Location"
                className="form-control mb-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <button
                className="btn btn-danger mb-3"
                onClick={handleSearch}
            >
                Search
            </button>

            {donors.map((donor) => (

                <div
                    key={donor.id}
                    className="card p-3 mb-2"
                >

                    <h5>{donor.username}</h5>

                    <p>Blood Group: {donor.blood_group}</p>

                    <p>Location: {donor.location}</p>

                    <p>Email: {donor.email}</p>

                </div>

            ))}

        </div>
    )
}

export default SearchDonors