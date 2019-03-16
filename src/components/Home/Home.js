import React, { Component } from "react";
import KebabCards from '../Common/Kebab/KebabCards';
import Welcome from './Welcome';
import { MDBCard, MDBCardBody } from "mdbreact";
import { getKebabs, getStats } from '../../api/remote';
import Loading from '../../components/Common/Loading/Loading';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kebabs: [],
            isLoading: true,
        }

        this.updateKebabsState = this.updateKebabsState.bind(this);
        this.updateStatsState = this.updateStatsState.bind(this);
    }

    updateKebabsState() {
        getKebabs().then((kebabs) => this.setState({ kebabs, isLoading: false, }));
    }

    updateStatsState() {
        getStats().then((s) => this.setState({ stats: s }));
    }

    componentDidMount() {
        this.updateKebabsState();
        this.updateStatsState();
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />;
        }

        let { addOrder, isAdmin, isAuthenticated, username } = this.props;
        let { kebabs } = this.state
        const startIndex = 0
        const pageSize = 6

        kebabs = kebabs
            .sort((a, b) => b.likes.length - a.likes.length)
            .slice(startIndex, pageSize);

        return (
            <MDBCard className="my-5 px-5 pb-5">
                <Welcome username={username} isAuthenticated={isAuthenticated} />
                <MDBCardBody>
                    {kebabs.length === 0 ?
                        <h2 className="h1-responsive font-weight-bold text-center">
                            We are out of stock and we are cooking now.
                            Come back later with your hungry tummy. Thank you!
                        </h2> :
                        <h2 className="h1-responsive font-weight-bold text-center">
                            Our top rated kebabs</h2>}
                </MDBCardBody>
                <KebabCards kebabs={kebabs} addOrder={addOrder}
                    isAdmin={isAdmin} isAuthenticated={isAuthenticated}
                    updateKebabsState={this.updateKebabsState} updateStatsState={this.updateStatsState} />
            </MDBCard>

        );
    }
}

export default Home;