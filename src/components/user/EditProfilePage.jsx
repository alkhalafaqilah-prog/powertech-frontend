import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import Spinner from '../ui/Spinner'
import "./LoginPage.css"

const EditProfilePage = () => {
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        api.get("user_info")
            .then(res => {
                setFormData(res.data)
                console.log(res.data)
                setLoading(false)
            })
            .catch(err => {
                setError("Failed to load user data.")
                console.log(err.message)
                setLoading(false)
            })
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            await api.patch("update_profile/", formData)
            alert("Profile updated successfully!")
            navigate("/profile")
            
        } catch (err) {
            const errorMessage = err.response?.data?.detail || "Update failed."
            setError(errorMessage)
        }
    }

    if (loading) return <Spinner loading={true} />
    if (error) return <div className="alert alert-danger">{error}</div>

    return (
        <div className="container my-5">
            <h2>Edit Your Profile</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={formData.username || ''} readOnly disabled /> 
                </div>

                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first_name" value={formData.first_name || ''} onChange={handleChange} />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last_name" value={formData.last_name || ''} onChange={handleChange} />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={formData.email || ''} readOnly disabled /> 
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="phone" value={formData.phone || ''} onChange={handleChange} /> 
                </div>


                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" value={formData.address || ''} onChange={handleChange} /> 
                </div>


                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" value={formData.city || ''} onChange={handleChange} /> 
                </div>

                
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" value={formData.state || ''} onChange={handleChange} /> 
                </div>
                


                <button type="submit" className="btn btn-primary me-2">Save Changes</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate("/profile")}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProfilePage