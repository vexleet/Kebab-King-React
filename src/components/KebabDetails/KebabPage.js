import React, { Component } from "react";
import { MDBContainer, MDBCardHeader } from "mdbreact";
import InputReview from './InputReview';
import Details from './Details';
import Review from './Review';
import Loading from '../Common/Loading/Loading';
import { likeKebab, unlikeKebab, postReview } from '../../api/remote';
import toastr from 'toastr';

class KebabPageDetails extends Component {

    handleLike() {
        const kebabId = this[1];

        likeKebab(kebabId)
            .then(() => {
                this[0].props.updateKebabsState();
                toastr.success("Kebab liked successfully");
            });
    }

    handleUnlike() {
        const kebabId = this[1];

        unlikeKebab(kebabId)
            .then(() => {
                this[0].props.updateKebabsState();
                toastr.success("Kebab unliked successfully");
            });
    }

    handleReview(review) {
        const kebabId = this[1];

        postReview(kebabId, review)
            .then((res) => {
                this[0].props.updateKebabsState();
                toastr.success(res.message);
            })
    }

    render() {
        if (this.props.kebabs.length === 0) {
            return <Loading />
        }

        let kebabs = this.props.kebabs;
        let kebabId = this.props.match.params.id;
        let kebab = kebabs.find((k) => k._id === kebabId);
        let kebabIsLiked = kebab.likes.indexOf(this.props.username) >= 0;
        const reviews = kebab.reviews.map((r, i) => (<Review key={i} review={r} />))

        return (
            <MDBContainer className="marginTop">
                <Details kebab={kebab}
                    kebabIsLiked={kebabIsLiked}
                    handleLike={this.handleLike.bind([this, kebab._id])}
                    handleUnlike={this.handleUnlike.bind([this, kebab._id])} />
                <InputReview handleReview={this.handleReview.bind([this, kebab._id])} />
                <MDBCardHeader className="border-0 font-weight-bold marginTop">
                    <p className="mr-4 mb-0">{kebab.reviews.length} reviews</p>
                </MDBCardHeader>
                {reviews}
            </MDBContainer>
        );
    }
}

export default KebabPageDetails;