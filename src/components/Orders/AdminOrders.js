import React, { Component } from 'react';
import OrdersTable from "../Common/Orders/OrdersTable";
import { approveOrder } from '../../api/remote';
import toastr from 'toastr';

class AdminOrders extends Component {
    handleApprove() {
        let orderId = this[1];

        approveOrder(orderId)
            .then((res) => {
                toastr.success(res.message);
                this[0].updateOrdersState(true);
            })
    }

    render() {
        const { orders, updateOrdersState } = this.props;
        return (
            <OrdersTable orders={orders} isAdmin={true}
                updateOrdersState={updateOrdersState} handleApprove={this.handleApprove} />
        );
    }
}

export default AdminOrders;