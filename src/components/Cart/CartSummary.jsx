import {Link} from "react-router-dom"

const CartSummary = ({cartTotal, deliveryFee}) => {

    const subTotal = cartTotal
    const cart_deliveryFee = deliveryFee
    const total = subTotal + cart_deliveryFee

    return (
    <div className="col-md-4 align-self-start">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Cart Summary</h5>
        <hr />
        <div className="d-flex justify-content-between">
            <span>Sub Total:</span>
            <span>{`${subTotal} SAR`}</span>
        </div>
        <div className="d-flex justify-content-between">
            <span>Delivery fee:</span>
            <span>{`${cart_deliveryFee} SAR`}</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
            <span>Total:</span>
            <strong>{`${total} SAR`}</strong>
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
