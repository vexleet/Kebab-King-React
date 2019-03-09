import React, { Component } from 'react';
import { MDBRow, MDBCard, MDBCardBody, MDBInput, MDBTableHead, MDBTooltip, MDBTableBody, MDBTable } from "mdbreact";


class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            columns: [
                {
                    label: '',
                    field: 'img',
                },
                {
                    label: <strong>Product</strong>,
                    field: 'product'
                },
                {
                    label: <strong>Price</strong>,
                    field: 'price'
                },
                {
                    label: <strong>QTY</strong>,
                    field: 'qty'
                },
                {
                    label: <strong>Amount</strong>,
                    field: 'amount'
                },
                {
                    label: '',
                    field: 'button'
                }]
        });
    }

    render() {
        const rows = [];

        let kebabs = this.props.orders;

        kebabs.map(row => {
            return rows.push(
                {
                    'img': <img src={row.image} alt="" className="img-fluid z-depth-0" />,
                    'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.name}</strong></h5>, <p key={new
                        Date().getDate} className="text-muted">{row.subTitle}</p>],
                    'price': `$${row.price}`,
                    'qty': <MDBInput type="number" value={row.qty} style={{ width: "100px" }} />,
                    'amount': <strong>${row.qty * row.price}</strong>,
                    'button':
                        <MDBTooltip placement="top" componentClass="btn btn-sm btn-primary" tag="div" component="button" tooltipContent="Remove item">X</MDBTooltip>
                }
            )
        });
        let { columns } = this.state;
        return (
            <MDBRow className="my-2" center>
                <MDBCard className="w-100">
                    <MDBCardBody>
                        <MDBTable className="product-table">
                            <MDBTableHead className="font-weight-bold"
                                color="mdb-color lighten-5" columns={columns} />
                            <MDBTableBody rows={rows} />
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        )
    }
}

export default Cart;