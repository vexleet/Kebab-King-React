import React from "react";
import KebabCards from '../Common/Kebab/KebabCards';

const Home = (props) => {
    let { kebabs, addOrder, isAdmin, isAuthenticated, updateKebabsState } = props;

    const startIndex = 0
    const pageSize = 6
    kebabs = kebabs
        .sort((a, b) => b.likes.length - a.likes.length)
        .slice(startIndex, pageSize);

    return (
        <KebabCards kebabs={kebabs} addOrder={addOrder}
            isAdmin={isAdmin} isAuthenticated={isAuthenticated}
            updateKebabsState={updateKebabsState} />
    );
}

export default Home;