import React, { Component } from 'react';
import { createOrder } from '../../api/remote';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import createOrderValidator from '../../utils/createOrderValidator';
import Loading from '../../components/Common/Loading/Loading';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartOrders: [],
            isLoading: true,
        }

        this.updateLocalStorageCart = this.updateLocalStorageCart.bind(this);
    }

    removeOrderFromCart() {
        let order = this[1];
        console.log(this);
        let cartOrders = this[0].state.cartOrders.slice();
        let indexOfOrder = cartOrders.indexOf(order);
        cartOrders.splice(indexOfOrder, 1);
        console.log(cartOrders);
        this[0].setState({ cartOrders }, () => {
            this[0].updateLocalStorageCart();
        });
    }

    changeQuantityOfAProduct(e) {
        let qty = e.target.value;
        let order = this[1];

        let cartOrders = this[0].state.cartOrders.slice();
        let indexOfOrder = cartOrders.indexOf(order);
        cartOrders[indexOfOrder].qty = qty;
        this[0].setState({ cartOrders: cartOrders });
        this[0].updateLocalStorageCart();
    }

    handlePurchase() {
        let orders = this[1];
        let token = localStorage.getItem("token");

        if (!createOrderValidator(orders)) {
            return;
        }

        createOrder(orders, token)
            .then((res) => {
                toastr.success(res.message);
                this[0].setState({ cartOrders: [] });
                this[0].updateLocalStorageCart();
                this[0].props.history.push('/orders');
            });
    }

    updateLocalStorageCart() {
        localStorage.setItem("cartOrders", JSON.stringify(this.state.cartOrders));
    }

    componentDidMount() {
        let cartOrders = JSON.parse(localStorage.getItem("cartOrders"));

        this.setState({ cartOrders, isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        let orders = this.state.cartOrders;
        let total = orders.reduce((accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.qty, 0);

        return (
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead className="mdb-color lighten-5">
                                <tr>
                                    <th />
                                    <th className="font-weight-bold">
                                        <strong>Product</strong>
                                    </th>
                                    <th className="font-weight-bold">
                                        <strong>Size</strong>
                                    </th>
                                    <th />
                                    <th className="font-weight-bold">
                                        <strong>Price</strong>
                                    </th>
                                    <th className="font-weight-bold">
                                        <strong>QTY</strong>
                                    </th>
                                    <th className="font-weight-bold">
                                        <strong>Amount</strong>
                                    </th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => {
                                    return <tr key={order._id}>
                                        <th scope="row">
                                            <img src={order.image} className="img-fluid z-depth-0" />
                                        </th>
                                        <td>
                                            <h5 className="mt-3"><strong>{order.name}</strong></h5>
                                        </td>
                                        <td>{order.size}</td>
                                        <td />
                                        <td>${order.price}</td>
                                        <td>
                                            <input type="number" defaultValue={order.qty} min="1" aria-label="Search" className="form-control" style={{ width: '100px' }} onChange={this.changeQuantityOfAProduct.bind([this, order])} />
                                        </td>
                                        <td className="font-weight-bold">
                                            <strong>${(order.qty * order.price).toFixed(2)}</strong>
                                        </td>
                                        <td>
                                            <button type="button"
                                                className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item" onClick={this.removeOrderFromCart.bind([this, order])}>X</button>
                                        </td>
                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={3} className="text-left">
                                        <Link className="btn btn-primary btn-rounded orange darken-1"
                                            to='/menu'>Continue Shopping</Link>
                                    </td>
                                    <td>
                                        <h4 className="mt-2"><strong>Total</strong></h4>
                                    </td>
                                    <td className="text-right">
                                        <h4 className="mt-2"><strong>${total.toFixed(2)}</strong></h4>
                                    </td>
                                    <td colSpan={3} className="text-right">
                                        <button type="button" className="btn btn-primary btn-rounded" onClick={this.handlePurchase.bind([this, orders])}>
                                            Complete purchase
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;