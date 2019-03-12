import React from 'react'

const OrderDetailsRow = (props) => {
    const { name, qty, price } = props.product
    let total = qty * price
    return (
        <tr>
            <th>#{props.index + 1}</th>
            <td>{name}</td>
            <td>$ {price.toFixed(2)}</td>
            <td>{qty}</td>
            <td>$ {total.toFixed(2)}</td>
        </tr>
    )
}

export default OrderDetailsRow
