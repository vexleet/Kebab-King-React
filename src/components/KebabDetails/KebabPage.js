import React from "react";
import { MDBContainer } from "mdbreact";
import InputReview from './InputReview';
import Details from './Details';

const FeaturesPage = () => {
    return (
        <MDBContainer className="marginTop">
            <Details name={"Chicken Doner"}
                description={"best doner in the world"}
                price={"2.50"}
                size={"Small"}
                ingredients={["toasted bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"]}
                image={"http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg"} />
            < InputReview />
        </MDBContainer>
    );
}

export default FeaturesPage;