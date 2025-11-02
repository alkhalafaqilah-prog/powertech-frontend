import {Link} from "react-router-dom"
import { useState } from "react";

const PaymentStatusPage = () => {

    const [statusMessage, setStatusMessage] = useState('Verifying your payment');
    const [statusSubMessage, setStatusSubMessage] = useState('Wait a momment, your payment is being verified!')



    return (
    <header className="py-5" style={{backgroundColor: "#008080"}}>
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h2 className="display-4 fw-bold">{statusMessage}</h2>
            <p className="lead fw-normal text-white-75 mb-4">{statusSubMessage}</p>
            <span>
            <Link to="/profile" className="btn btn-light btn-lg px-4 py-2 mx-3">View Order Details</Link>
            <Link to="/" className="btn btn-light btn-lg px-4 py-2">Continue Shopping</Link>
            </span>
        </div>
    </div>
</header>
)
}

export default PaymentStatusPage
