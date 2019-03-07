import React from "react";
import { Link } from 'react-router-dom';
import KebabCards from '../Common/Kebab/KebabCards';

const Home = (props) => {
    let { kebabs } = props;
    return (
        <KebabCards kebabs={kebabs} />
    );
}

export default Home;