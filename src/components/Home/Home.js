import React from "react";
import KebabCards from '../Common/Kebab/KebabCards';

const Home = (props) => {
    let { kebabs, addOrder, isAdmin, isAuthenticated, updateKebabsState } = props;
    return (
        <KebabCards kebabs={kebabs} addOrder={addOrder}
            isAdmin={isAdmin} isAuthenticated={isAuthenticated}
            updateKebabsState={updateKebabsState} />
    );
}

export default Home;