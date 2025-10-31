const OrderItem = () => {

    return (
    <div className="d-flex justify-content-between align-items-center mb-3" style={{padding: "10px 0"}}>
    <div className="d-flex align-items-center">
    <img
        src=""
        alt="Product Image"
        className="img-fluid"
        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius:"5px" }}
    />
    <div className="ms-3">
        <h6 className="mb-0">Product 1</h6>
        <small>Quantity: 3</small>
    </div>
    </div>
    <h6>$50</h6>
    </div>
)
}

export default OrderItem
