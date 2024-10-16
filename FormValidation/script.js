var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

const validateName = () => {
    let name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
};
const validatePhone = () => {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no. should be of 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
};
const validateEmail = () => {
    let email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
};
const validateMessage = () => {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'More Characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
};
const validateForm = () => {
    if (!validateName || validatePhone || validateEmail || validateMessage) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
};
