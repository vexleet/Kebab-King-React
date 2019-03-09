import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";

const Details = (props) => {
    const kebab = props.kebab;
    const kebabIsLiked = props.kebabIsLiked;

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="5" className="text-center text-lg-left">
                    <img
                        className="img-fluid"
                        src={kebab.image}
                        alt=""
                    />
                </MDBCol>
                <MDBCol lg="7">
                    <MDBRow>
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Name</h5>
                            <p className="grey-text">{kebab.name}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Description</h5>
                            <p className="grey-text">{kebab.description}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Ingredients</h5>
                            <p className="grey-text">{kebab.ingredients.join(', ')}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Price</h5>
                            <p className="grey-text">${kebab.price.toFixed(2)}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Size</h5>
                            <p className="grey-text">{kebab.size}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Likes</h5>
                            <p className="grey-text">{kebab.likes.length}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtn color="orange" rounded size="md">Order</MDBBtn>
                        {kebabIsLiked ?
                            <MDBBtn color="blue" rounded size="md" onClick={props.handleUnlike}>Unlike</MDBBtn>
                            : <MDBBtn color="blue" rounded size="md" onClick={props.handleLike}>Like</MDBBtn>}
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Details;
