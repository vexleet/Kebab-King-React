import React from 'react';
import { MDBRow, MDBCard, MDBCardBody, MDBInput, MDBTableHead, MDBTooltip, MDBTableBody, MDBTable } from "mdbreact";

const rows = [];

let kebabs = [
    {
        "name": "Chicken burger",
        "description": "A sweet burger with chicken and vegetables. Its just amazing",
        "price": 2,
        "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
        "ingredients": ["chicken", "vegetables", "sauce of your choice"],
        "size": "Small"
    },
    {
        "name": "Chicken doner Small",
        "description": "A sweet doner with chicken, vegetables and fired potatoes. Its just amazing",
        "price": 2,
        "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
        "ingredients": ["arabic bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"],
        "size": "Small"
    },
    {
        "name": "Chicken doner Medium",
        "description": "A sweet doner with chicken, vegetables and fired potatoes. Its just amazing",
        "price": 3.50,
        "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
        "ingredients": ["arabic bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"],
        "size": "Medium"
    }
]

let columns = [
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
    }
]

kebabs.map(row => {
    return rows.push(
        {
            'img': <img src={row.image} alt="" className="img-fluid z-depth-0" />,
            'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.name}</strong></h5>, <p key={new
                Date().getDate} className="text-muted">{row.subTitle}</p>],
            'price': `$${row.price}`,
            'qty':
                <MDBInput type="number" default={1} style={{ width: "100px" }} />,
            'amount': <strong>${1 * row.price}</strong>,
            'button':
                <MDBTooltip placement="top" componentClass="btn btn-sm btn-primary" tag="div" component="button" tooltipContent="Remove item">X</MDBTooltip>
        }
    )
});

const Cart = () => {
    return (
        <MDBRow className="my-2" center>
            <MDBCard className="w-100">
                <MDBCardBody>
                    <MDBTable className="product-table">
                        <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
                        <MDBTableBody rows={rows} />
                    </MDBTable>
                </MDBCardBody>
            </MDBCard>
        </MDBRow>
    )
}

export default Cart;