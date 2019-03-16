import React, { Component } from 'react';
import OrdersTable from "../Common/Orders/OrdersTable";
import { approveOrder } from '../../api/remote';
import toastr from 'toastr';
import { pendingOrders } from '../../api/remote';
import Loading from '../Common/Loading/Loading';

class AdminOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            isLoading: true,
        }

        this.updateAdminOrdersState = this.updateAdminOrdersState.bind(this);
    }

    updateAdminOrdersState() {
        pendingOrders().then((orders) => this.setState({ orders, isLoading: false }));
    }

    handleApprove() {
        let orderId = this[1];

        approveOrder(orderId)
            .then((res) => {
                toastr.success(res.message);
                this[0].updateAdminOrdersState();
            })
    }

    componentDidMount() {
        this.updateAdminOrdersState();
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        let { orders } = this.state;

        return (
            <OrdersTable orders={orders} isAdmin={true}
                updateAdminOrdersState={this.updateAdminOrdersState} handleApprove={this.handleApprove} />
        );
    }
}

export default AdminOrders;