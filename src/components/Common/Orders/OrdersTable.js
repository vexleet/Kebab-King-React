import React from 'react';
import { MDBTable, MDBTableHead, MDBContainer } from 'mdbreact';
import OrderBody from './OrdersBody';

const BasicTable = (props) => {
    return (
        <MDBContainer>
            <MDBTable responsive>
                <MDBTableHead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>View</th>
                        {props.isAdmin && <th>Approve</th>}
                    </tr>
                </MDBTableHead>
                <OrderBody orders={props.orders} isAdmin={props.isAdmin} />
            </MDBTable>
        </MDBContainer>
    );
}

export default BasicTable;