import React from 'react';
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import Kebab from './Kebab';
//TODO: key=kebab._id

const KebabCard = (props) => {
    let kebabs = props.kebabs;
    let { isAdmin, isAuthenticated, updateKebabsState, updateStatsState } = props;
    return (
        <MDBCard className="my-5 px-5 pb-5 container">
            <MDBCardBody className="text-center">
                <MDBRow>
                    {kebabs.map((kebab, index) => <Kebab key={index} kebab={kebab} isAdmin={isAdmin}
                        isAuthenticated={isAuthenticated} addOrder={props.addOrder}
                        updateKebabsState={updateKebabsState} updateStatsState={updateStatsState} />)}
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default KebabCard;