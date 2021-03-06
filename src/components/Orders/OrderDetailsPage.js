import React, { Component } from 'react'
import { MDBTable, MDBTableHead, MDBContainer } from 'mdbreact';
import OrderDetailsRow from './OrderDetailsRow';
import Loading from '../Common/Loading/Loading';
import { getOrders, pendingOrders } from '../../api/remote';

class OrdersBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            isLoading: true,
        }
    }

    componentWillMount() {
        if (this.props.isAdmin) {
            pendingOrders().then((orders) => this.setState({ orders, isLoading: false }));
        }
        else {
            getOrders().then((orders) => this.setState({ orders, isLoading: false }));
        }
    }

    render() {
        if (this.state.orders.length === 0) {
            return <Loading />
        }

        let { orders } = this.state;
        let orderId = this.props.match.params.id;
        let order = orders.find(o => o._id === orderId);

        let products = order.products.map((p, i) => (<OrderDetailsRow key={i} product={p} index={i} />))
        let totalPrice = order.products.reduce((accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.qty, 0);

        return (
            <MDBContainer>
                <h1 className='text-center'>Order #{order._id}</h1>
                <div className='row space-top'>
                    <div className='col-md-12 mt-3'>
                        <p><span className='font-weight-bold lead text-warning'>Products In Order:</span> <span className='ml-2 lead'>{order.products.length}</span></p>
                        <p><span className='font-weight-bold lead text-warning'>Date:</span> <span className='ml-2 lead'>{new Date(order.date).toLocaleString()}</span></p>
                        <p><span className='font-weight-bold lead text-warning'>Total Price:</span> <span className='ml-2 lead'>${totalPrice.toFixed(2)}</span></p>
                    </div>
                </div>
                <MDBTable responsive>
                    <MDBTableHead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </MDBTableHead>
                    <tbody>
                        {products}
                    </tbody>
                </MDBTable>
            </MDBContainer>
        )
    }
}

export default OrdersBody;