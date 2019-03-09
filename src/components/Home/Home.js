import React from "react";
import KebabCards from '../Common/Kebab/KebabCards';

const Home = (props) => {
    let { kebabs, addOrder } = props;
    return (
        <KebabCards kebabs={kebabs} addOrder={addOrder} />
    );
}

export default Home;