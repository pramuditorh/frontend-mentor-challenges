const form = document.getElementById('form');
const inputFirstName = document.getElementById('first_name');
const inputLastName = document.getElementById('last_name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const formImageError = document.getElementById('form-image-error');
const formValidation = document.getElementById('form-validation');

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstNameValue = form['first_name'].value;
    const lastNameValue = form['last_name'].value;
    const emailValue = form['email'].value;
    const passwordValue = form['password'].value;

    if (firstNameValue === '') {
        inputFirstName.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Field cannot be empty';
    } else if (!validateName(firstNameValue)) {
        inputFirstName.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Looks like you input invalid first name';
    } else {
        inputFirstName.classList.remove('form__input--error');
        formImageError.classList.remove('form__image-error--active');
        formValidation.classList.remove('form__validation--active');
    }

    if (lastNameValue === '') {
        inputLastName.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Field cannot be empty';
    } else if (!validateName(lastNameValue)) {
        inputLastName.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Looks like you input invalid last name';
    } else {
        inputLastName.classList.remove('form__input--error');
        formImageError.classList.remove('form__image-error--active');
        formValidation.classList.remove('form__validation--active');
    }

    if (emailValue === '') {
        inputEmail.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Field cannot be empty';
    } else if (!validateEmail(emailValue)) {
        inputEmail.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Looks like you input invalid email';
    } else {
        inputEmail.classList.remove('form__input--error');
        formImageError.classList.remove('form__image-error--active');
        formValidation.classList.remove('form__validation--active');
    }

    if (passwordValue === '') {
        inputPassword.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Field cannot be empty';
    } else if (!validatePassword(passwordValue)) {
        inputPassword.classList.add('form__input--error');
        formImageError.classList.add('form__image-error--active');
        formValidation.classList.add('form__validation--active');
        formValidation.innerText = 'Looks like you input invalid password';
    } else {
        inputPassword.classList.remove('form__input--error');
        formImageError.classList.remove('form__image-error--active');
        formValidation.classList.remove('form__validation--active');
    }
});

function validateName(name) {
    const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return re.test(String(name).toLowerCase());
}

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^[A-Za-z0-9\W]{3,}/;
    return re.test(String(password).toLowerCase());
}