import React from 'react';
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import Kebab from './Kebab';
//TODO: key=kebab._id

const KebabCard = (props) => {
    let kebabs = props.kebabs;
    return (
        <MDBCard className="my-5 px-5 pb-5 container">
            <MDBCardBody className="text-center">
                <MDBRow>
                    {kebabs.map((kebab, index) => <Kebab key={index} kebab={kebab} addOrder={props.addOrder} />)}
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default KebabCard;