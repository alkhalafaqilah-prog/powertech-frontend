import {Link} from "react-router-dom"

const CartSummary = () => {



    return (
    <div className="col-md-4 align-self-start">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Cart Summary</h5>
        <hr />
        <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>$100.00</span>
        </div>
        <div className="d-flex justify-content-between">
            <span>Tax:</span>
            <span>$4.00</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
            <span>Total:</span>
            <strong>$104.00</strong>
        </div>
        <Link to="/checkout">
        <button
            className="btn btn-primary w-100"
            style={{ backgroundColor: '#008080', borderColor: '#008080' }}
        >
            Proceed to Checkout
        </button>
        </Link>
        </div>
    </div>
    </div>
)
}

export default CartSummary
