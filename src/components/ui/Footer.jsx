import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
return (
    <footer className="py-3" style={{ backgroundColor: '#008080', color: 'white' }}>
    <div className="container text-center">
      {/* Quick Links Section */}
    <div className="mb-2">
        <a href="main" className="text-white text-decoration-none mx-2">Home</a>
        <a href="/" className="text-white text-decoration-none mx-2">Shop</a>
    </div>

      {/* Social Media Icons Section */}
    <div className="mb-2">
        <a href="https://www.facebook.com/" className="text-white mx-2"><FaFacebook /></a>
        <a href="https://x.com/?lang=en" className="text-white mx-2"><FaTwitter /></a>
        <a href="https://www.instagram.com/" className="text-white mx-2"><FaInstagram /></a>
    </div>

      {/* Copyright Section */}
    <p className="small mb-0">&copy; 2025 PowerTech</p>
    </div>
</footer>
)
}

export default Footer
