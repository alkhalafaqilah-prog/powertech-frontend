import { Link, useNavigate} from "react-router-dom"
import { useState } from "react"
import "./LoginPage.css"
import api from "../../api"

const SignUpPage = () => {

    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (formData.password !== formData.confirm_password) {
            setError("Passwords do not match.")
            return
        }

        try {
            const payload = {
                username: formData.username,
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                password: formData.password,
            };

            const res = await api.post("signup/", payload)
            
            console.log("Registration successful:", res.data)
            navigate("/login")

        } catch (err) {
            const errorMessage = err.response?.data?.username?.[0] || 
                                err.response?.data?.email?.[0] || 
                                "Registration failed. Please check your details."
            setError(errorMessage)
            console.error(err)
        }
    }


    return (
    <div className="login-container my-5"> 
    <div className="login-card shadow">
    {error && <div className="alert alert-danger">{error}</div>}
    <h2 className="login-title">Create an account.</h2>
    <p className="login-subtitle">Become a valued member at PowerTech!</p>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input className="form-control" id="username" placeholder="Enter your username" required 
            onChange={handleChange} value={formData.username}/>
        </div>


        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First name:</label>
            <input type="text" className="form-control" id="first_name" placeholder="Enter your first name" required 
            onChange={handleChange} value={formData.first_name}/>
        </div>

        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last name:</label>
            <input type="text" className="form-control" id="last_name" placeholder="Enter your last name" required 
            onChange={handleChange} value={formData.last_name}/>
        </div>

        
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required 
            onChange={handleChange} value={formData.email}/>
        </div>

        

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required 
            onChange={handleChange} value={formData.password}/>
        </div>

        <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_password" placeholder="Confirm your password" required 
            onChange={handleChange} value={formData.confirm_password}/>
        </div>

        <button type="submit" className="btn btn-primary w-100">Create account</button>
    </form>
    <div className="login-footer">
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
</div>
</div>
)
}

export default SignUpPage
