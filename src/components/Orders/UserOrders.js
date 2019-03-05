import React from 'react';
import OrdersTable from '../Common/Orders/OrdersTable';

let orders = [
    {
        date: Date.now(),
        total: 100,
        status: "Pending",
    },
    {
        date: Date.now(),
        total: 2500,
        status: "Approved",
    },
    {
        date: Date.now(),
        total: 2300,
        status: "Pending",
    }
]

const UserOrders = props => {
    return (
        <OrdersTable orders={orders} />
    );
}

export default UserOrders;