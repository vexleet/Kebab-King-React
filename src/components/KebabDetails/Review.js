import React from 'react'
import { MDBMedia } from "mdbreact";

const Review = (props) => {
    const { review, createdBy } = props.review
    return (
        <div className="marginTop">
            <MDBMedia className="d-block d-md-flex">
                <MDBMedia body className="text-center text-md-left">
                    <h5 className="font-weight-bold mt-0">{createdBy}</h5>
                    <p>{review}</p>
                </MDBMedia>
            </MDBMedia>
        </div>
    )
}

export default Review