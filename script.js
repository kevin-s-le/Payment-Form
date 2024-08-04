// Event listener to handle form submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

// Function to validate the form
function validateForm() {
    // clears error messsages
    clearErrors();

    let isValid = true;

    // validates credit card number
    const cardNumber = document.getElementById('cardNumber').value;
    if (!validateCardNumber(cardNumber)) {
        document.getElementById('cardNumberError').innerText = 'Invalid credit card number';
        isValid = false;
    }

    // Validate expiration date
    const expiryDate = document.getElementById('expiryDate').value;
    if (!validateExpiryDate(expiryDate)) {
        document.getElementById('expiryDateError').innerText = 'Invalid expiration date';
        isValid = fale;
    }

    // Validate CVV number
    const cvv = document.getElementById('cvv').value;
    if (!validateCVV(cvv)) {
        document.getElementById('cvvError').innerText = 'Invalid CVV';
        isValid = false;
    }

    // Displays a message to the user if all forms are valid
    if (isValid) {
        alert('Payment successfully submitted!');
    }
}

// function to clear previous error messages
function clearErrors() {
    document.getElementById('cardNumberError').innerText = '';
    document.getElementById('expiryDateError').innerText = '';
    document.getElementById('cvvError').innerText = '';
}

// function that checks to make sure form has valid numbers
function validateCardNumber(cardNumber) {
    const cardNumberPattern = /^[0-9]{13,19}$/;
    return cardNumberPattern.test(cardNumber);
}

// function that checks expiry date logic
function validateExpiryDate(expiryDate) {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryDatePattern.test(expiryDate)) {
        return false;
    }

    const parts = expiryDate.split('/'); // splits expiry date entry into month / year
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[1], 10) + 2000; // converts 2-digit year to 4-digit year

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    // checks if the expiry date is in the past
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }

    return true;
}

// checks if CVV number is entered using CVV number logic
function validateCVV(cvv) {
    const cvvPattern = /^[0-9]{3,4}$/;
    return cvvPattern.test(cvv);
}