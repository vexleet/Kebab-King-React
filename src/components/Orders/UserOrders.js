import React from 'react';
import OrdersTable from '../Common/Orders/OrdersTable';

const UserOrders = props => {
    let orders = props.orders;
    return (
        <OrdersTable orders={orders} />
    );
}

export default UserOrders;