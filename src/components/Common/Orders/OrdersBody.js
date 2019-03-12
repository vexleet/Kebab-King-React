import React from 'react'
import { MDBTableBody, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const OrdersBody = (props) => {
    return (
        <MDBTableBody>
            {props.orders.map((order, index) => {
                let total = order.products.reduce((accumulator, currentValue) =>
                    accumulator + currentValue.price * currentValue.qty, 0);

                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{new Date(order.date).toLocaleString()}</td>
                    <td>{total.toFixed(2)}</td>
                    <td>{order.status}</td>
                    <td><Link to={`/orders/${order._id}`}
                        className="white-text orange darken-1 btn btn-blue btn-md btn-rounded Ripple-parent">View</Link>
                    </td>
                    {props.isAdmin && <td><MDBBtn color="green"
                        rounded size="md"
                        onClick={props.handleApprove.bind([props, order._id])}>Approve</MDBBtn></td>}
                </tr>
            })}
        </MDBTableBody>
    )
}

export default OrdersBody;