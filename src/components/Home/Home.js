import React from "react";
import KebabCards from '../Common/Kebab/KebabCards';
import Welcome from './Welcome';
import { MDBCard, MDBRow, MDBCardBody } from "mdbreact";

const Home = (props) => {
    let { kebabs, addOrder, isAdmin, isAuthenticated, updateKebabsState, username, updateStatsState } = props;

    const startIndex = 0
    const pageSize = 6
    kebabs = kebabs
        .sort((a, b) => b.likes.length - a.likes.length)
        .slice(startIndex, pageSize);

    return (
        <MDBCard className="my-5 px-5 pb-5">
            <Welcome username={username} isAuthenticated={isAuthenticated} />
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center">
                    Our top rated kebabs
                </h2></MDBCardBody>
            <KebabCards kebabs={kebabs} addOrder={addOrder}
                isAdmin={isAdmin} isAuthenticated={isAuthenticated}
                updateKebabsState={updateKebabsState} updateStatsState={updateStatsState} />
        </MDBCard>

    );
}

export default Home;