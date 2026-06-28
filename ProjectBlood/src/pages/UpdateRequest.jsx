import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api'

function UpdateRequest() {
    const { id } = useParams()
    const [formData, setFormData] = useState({
        patient_name: "",
        hospital: "",
        location: "",
        units_needed: ""
    })
    useEffect(() => {

        const fetchRequest = async () => {

            try {

                const response = await api.get(
                    `blood-request/${id}/`
                )

                setFormData(response.data)

            } catch (error) {

                console.log(error.response?.data)

            }

        }

        fetchRequest()

    }, [id])
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await api.patch(
                `update-request/${id}/`,
                formData
            )

            alert("Request Updated Successfully")

            console.log(response.data)

        } catch (error) {

            console.log(error.response?.data)

        }

    }
    return (
        <div className='container mt-3'>
            <h1>Update Request</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="patient_name"
                    placeholder="Patient Name"
                    value={formData.patient_name}
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="hospital"
                    placeholder="Hospital"
                    value={formData.hospital}
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="units_needed"
                    placeholder="Units Needed"
                    value={formData.units_needed}
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update Request
                </button>

            </form>



        </div>
    )
}

export default UpdateRequest