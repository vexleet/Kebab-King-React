import toastr from 'toastr';

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function loginValidator(user) {
    let isValid = true;

    if (!validateEmail || user.email === '') {
        toastr.error('Please provide a correct email address')
        isValid = false;
    }
    if (user.password.length < 8 || user.password === '') {
        toastr.error('Password must be at least 8 characters long')
        isValid = false;
    }

    return isValid;
}

export default loginValidator;