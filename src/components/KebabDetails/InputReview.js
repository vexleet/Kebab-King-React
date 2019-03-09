import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import createReviewValidator from '../../utils/createReviewValidator';

class InputPage extends Component {
    constructor(props) {
        super(props);

        this.state = { review: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!createReviewValidator(this.state.review)) {
            return;
        }

        this.props.handleReview(this.state.review);
        this.setState({ review: '' });
    }

    render() {
        return (
            <form method='post' onSubmit={this.handleSubmit}>
                <MDBInput type="textarea" onChange={this.handleChange}
                    label="Write your review here" name="review" outline value={this.state.review} />
                <MDBBtn color="blue" rounded size="md" type="submit">Submit review</MDBBtn>
            </form>
        );
    }
}

export default InputPage;