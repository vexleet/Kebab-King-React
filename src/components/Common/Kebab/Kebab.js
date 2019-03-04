import React from 'react';
import { MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";

const KebabCol = (props) => {
    let kebab = props.kebab;
    return (
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img className="img-fluid" src={kebab.image} alt="" />
                <MDBMask overlay="white-slight" />
            </MDBView>
            <h4 className="font-weight-bold mb-3"><strong>{kebab.name}</strong></h4>
            <p className="dark-grey-text">{kebab.description}</p>
            <MDBBtn color="orange" rounded size="md">Order</MDBBtn>
            <MDBBtn color="blue" rounded size="md">Details</MDBBtn>
            {/* <MDBBtn color="orange" rounded size="md">Edit</MDBBtn>
    <MDBBtn color="red" rounded size="md">Delete</MDBBtn> */}
        </MDBCol>)
};

export default KebabCol;