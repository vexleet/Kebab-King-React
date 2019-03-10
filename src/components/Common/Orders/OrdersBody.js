import React from 'react'
import { MDBTableBody, MDBBtn } from 'mdbreact';

const OrdersBody = (props) => {
    return (
        <MDBTableBody>
            {props.orders.map((order, index) => {
                let total = order.products.reduce((accumulator, currentValue) =>
                    accumulator + currentValue.price * currentValue.qty, 0);

                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.date}</td>
                    <td>{total.toFixed(2)}</td>
                    <td>{order.status}</td>
                    <td><MDBBtn color="orange" rounded size="md">View</MDBBtn>
                    </td>
                    {props.isAdmin && <td><MDBBtn color="green" rounded size="md">Approve</MDBBtn></td>}
                </tr>
            })}
        </MDBTableBody>
    )
}

export default OrdersBody;