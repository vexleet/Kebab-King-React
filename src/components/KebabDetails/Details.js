import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const Details = (props) => {
    return (
        <div>
            <MDBRow>
                <MDBCol lg="5" className="text-center text-lg-left">
                    <img
                        className="img-fluid"
                        src={props.image}
                        alt=""
                    />
                </MDBCol>
                <MDBCol lg="7">
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Name</h5>
                            <p className="grey-text">{props.name}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Description</h5>
                            <p className="grey-text">{props.description}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Ingredients</h5>
                            <p className="grey-text">{props.ingredients.join(', ')}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Price</h5>
                            <p className="grey-text">${props.price.toFixed(2)}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Size</h5>
                            <p className="grey-text">{props.size}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBBtn color="orange" rounded size="md">Order</MDBBtn>
                        <MDBBtn color="blue" rounded size="md">Like</MDBBtn>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Details;
