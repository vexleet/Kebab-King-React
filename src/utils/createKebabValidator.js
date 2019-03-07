import toastr from 'toastr';

function createKebabValidator(kebab) {
    kebab.price = parseFloat(kebab.price)

    let isValid = true;

    if (!kebab || typeof kebab.name !== 'string' || kebab.name.length < 3) {
        isValid = false
        toastr.error('Kebab name must be at least 3 symbols.');
    }

    if (!kebab || typeof kebab.size !== 'string' || kebab.size.length < 3) {
        isValid = false;
        toastr.error('Size must be at least 3 symbols');;
    }

    if (!kebab || typeof kebab.description !== 'string' || kebab.description.length < 10 || kebab.description.length > 200) {
        isValid = false
        toastr.error('Description must be at least 10 symbols and less than 200 symbols.');
    }

    if (!kebab || !kebab.price || kebab.price < 0) {
        isValid = false
        toastr.error('Price must be a positive number.');
    }

    if (!kebab || typeof kebab.image !== 'string' || !(kebab.image.startsWith('https://') || kebab.image.startsWith('http://')) || kebab.image.length < 14) {
        isValid = false
        toastr.error('Please enter valid Image URL. Image URL must be at least 14 symbols.');
    }

    return isValid;
}

export default createKebabValidator;