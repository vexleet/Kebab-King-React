import React, { Component } from 'react';
import { MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';



class KebabCol extends Component {
    handleOrder() {
        this[0].props.addOrder(this[1]);
    }
    render() {
        let kebab = this.props.kebab;
        return (
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img className="img-fluid" src={kebab.image} alt="" />
                    <MDBMask overlay="white-slight" />
                </MDBView>
                <h4 className="font-weight-bold mb-3"><strong>{kebab.name}</strong></h4>
                <p className="dark-grey-text">{kebab.description}</p>
                <MDBBtn color="orange" rounded size="md"
                    onClick={this.handleOrder.bind([this, kebab])}>Order</MDBBtn>
                <Link className="white-text blue btn btn-blue btn-md btn-rounded Ripple-parent" to={`/details/${kebab._id}`}>Details</Link>
                {/* <MDBBtn color="orange" rounded size="md">Edit</MDBBtn>
    <MDBBtn color="red" rounded size="md">Delete</MDBBtn> */}
            </MDBCol>
        )
    }
};

export default KebabCol;