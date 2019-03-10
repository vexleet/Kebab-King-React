import React, { Component } from 'react';

class Cart extends Component {
    render() {
        let kebabs = this.props.orders;
        let total = kebabs.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

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
                                {kebabs.map((kebab) => {
                                    return <tr key={kebab._id}>
                                        <th scope="row">
                                            <img src={kebab.image} className="img-fluid z-depth-0" />
                                        </th>
                                        <td>
                                            <h5 className="mt-3"><strong>{kebab.name}</strong></h5>
                                        </td>
                                        <td>{kebab.size}</td>
                                        <td />
                                        <td>${kebab.price}</td>
                                        <td>
                                            <input type="number" defaultValue={kebab.qty} aria-label="Search" className="form-control" style={{ width: '100px' }} />
                                        </td>
                                        <td className="font-weight-bold">
                                            <strong>${kebab.qty * kebab.price}</strong>
                                        </td>
                                        <td>
                                            <button type="button"
                                                className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item">X</button>
                                        </td>
                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={3} className="text-left">
                                        <button type="button" className="btn btn-primary btn-rounded orange darken-1">
                                            Continue Shopping
                                        </button>
                                    </td>
                                    <td>
                                        <h4 className="mt-2"><strong>Total</strong></h4>
                                    </td>
                                    <td className="text-right">
                                        <h4 className="mt-2"><strong>${total}</strong></h4>
                                    </td>
                                    <td colSpan={3} className="text-right">
                                        <button type="button" className="btn btn-primary btn-rounded">
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