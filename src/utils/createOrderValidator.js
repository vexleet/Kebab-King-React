import toastr from 'toastr';

function createOrderValidator(orders) {
    let hasOrderWithNegativeQty = orders.find((o) => o.qty <= 0);

    let isValid = true;

    if (hasOrderWithNegativeQty !== undefined) {
        toastr.error("Quantity of a product must be at least 1");
        isValid = false;
    }

    if (orders.length === 0) {
        toastr.error("Your cart is empty");
        isValid = false;
    }

    return isValid;
}

export default createOrderValidator;