import React from "react";
import KebabCards from '../Common/Kebab/KebabCards';
import Welcome from './Welcome';
import { MDBCard } from "mdbreact";

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
            <KebabCards kebabs={kebabs} addOrder={addOrder}
                isAdmin={isAdmin} isAuthenticated={isAuthenticated}
                updateKebabsState={updateKebabsState} updateStatsState={updateStatsState} />
        </MDBCard>

    );
}

export default Home;