function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function registerValidateForm(user) {
    const username = user.username;
    const email = user.email;
    const password = user.password;
    const confirmPassword = user.confirmPassword;


    let validUsername = () => {
        return username.trim().length >= 4;
    }

    let validEmail = () => {
        return validateEmail(email);
    }

    let validPassword = () => {
        return password.trim().length > 7;
    }

    let validConfirmPassword = () => {
        return password.trim().length > 7 && confirmPassword === password;
    }

    return {
        validUsername,
        validEmail,
        validPassword,
        validConfirmPassword,
    }
}

function loginValidateForm(user) {
    const email = user.email;
    const password = user.password;

    let validEmail = () => {
        return validateEmail(email);
    }

    let validPassword = () => {
        return password.trim().length > 7;
    }

    return {
        validEmail,
        validPassword,
    }
}

function createKebabValidateForm(kebab) {
    const { name, ingredients, description, image, size, price } = kebab;

    let validName = () => {
        return name.trim().length > 3;
    }

    let validSize = () => {
        return size.trim().length > 3;
    }

    let validIngredients = () => {
        return ingredients.length > 2 &&
            ingredients.indexOf(', ') < 0;
    }

    let validDescription = () => {
        return description.length >= 10 && description.length <= 200;
    }

    let validPrice = () => {
        return price > 0;
    }

    let validImage = () => {
        return (image.startsWith('https://') || image.startsWith('http://')) && image.length >= 14;
    }

    return {
        validName,
        validIngredients,
        validSize,
        validDescription,
        validImage,
        validPrice,
    };
}

export {
    registerValidateForm,
    loginValidateForm,
    createKebabValidateForm,
}