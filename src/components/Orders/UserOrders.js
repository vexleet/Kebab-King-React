import React, { Component } from 'react';
import OrdersTable from '../Common/Orders/OrdersTable';
import { getOrders } from '../../api/remote';
import Loading from '../Common/Loading/Loading';

class UserOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        getOrders().then((orders) => this.setState({ orders, isLoading: false }));
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        let { orders } = this.state;
        return (
            <OrdersTable orders={orders} />
        );
    }
}

export default UserOrders;