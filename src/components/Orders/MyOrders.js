import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer } from 'mdbreact';

const BasicTable = props => {
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
                        <th>Approve</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>1</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td><MDBBtn color="orange" rounded size="md">View</MDBBtn>
                        </td>
                        <td><MDBBtn color="green" rounded size="md">Approve</MDBBtn></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td><MDBBtn color="orange" rounded size="md">View</MDBBtn>
                        </td>
                        <td><MDBBtn color="green" rounded size="md">Approve</MDBBtn></td>

                    </tr>
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>
    );
}

export default BasicTable;