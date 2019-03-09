import toastr from 'toastr';

function createReviewValidator(review) {
    let isValid = true;

    if (review.trim().length < 4 || review.length === '') {
        isValid = false;
        toastr.error("Review must be at least 4 characters long");
    }

    return isValid;
}

export default createReviewValidator;