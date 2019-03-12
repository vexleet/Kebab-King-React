import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';

function Welcome(props) {
    let { username, isAuthenticated } = props;
    return (
        <MDBCardBody>
            {!isAuthenticated ?
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard reverse>
                            <MDBCardBody cascade className="text-center">
                                <h2 className="font-weight-bold">Welcome to our fast food restaurant</h2>
                                <p>Your favourite food is just a few click away.
                                Register now and choose from our menu.</p>
                                <Link to='/menu' className="white-text orange darken-1 btn btn-md btn-rounded Ripple-parent">Go To Menu</Link>
                                <Link to='/register' className="white-text orange darken-1 btn btn-md btn-rounded Ripple-parent">Register</Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow> :
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard reverse>
                            <MDBCardBody cascade className="text-center">
                                <h2 className="font-weight-bold">Welcome back our fast food restaurant, {username}</h2>
                                <Link to='/menu' className="white-text orange darken-1 btn btn-md btn-rounded Ripple-parent">Go To Menu</Link>
                                <Link to='/orders' className="white-text orange darken-1 btn btn-md btn-rounded Ripple-parent">View your orders</Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>}

            <hr className="mb-5 mt-4" />
        </MDBCardBody>
    )
}

export default Welcome
