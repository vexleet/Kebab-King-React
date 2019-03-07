import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import InputReview from './InputReview';
import Details from './Details';
import Loading from '../Common/Loading/Loading';

class KebabPageDetails extends Component {
    render() {
        if (this.props.kebabs.length === 0) {
            return <Loading />
        }

        let kebabs = this.props.kebabs;
        let kebabId = this.props.match.params.id;
        let kebab = kebabs.find((k) => k._id === kebabId);
        return (
            <MDBContainer className="marginTop">
                <Details name={kebab.name}
                    description={kebab.description}
                    price={kebab.price}
                    size={kebab.size}
                    ingredients={kebab.ingredients}
                    image={kebab.image} />
                < InputReview />
            </MDBContainer>
        );
    }
}

export default KebabPageDetails;