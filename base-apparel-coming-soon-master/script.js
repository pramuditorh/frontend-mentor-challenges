const form = document.getElementById('form')
const formInput = document.getElementById('form-input');
const formImgError = document.getElementById('form-img-error');
const formBtn = document.getElementById('form-btn');
const formValidation = document.getElementById('form-validation');

form.addEventListener('submit', e => {
	e.preventDefault();
    const formInputVal = formInput.value;
    console.log(formInputVal);

	// check if it is a valid email
	if (!validateEmail(formInputVal)) {
        formInput.classList.add('form__input--error');
        formImgError.classList.add('form__img-error--active');
        formValidation.classList.add('form__validation--active');
	} else {
		
        formInput.classList.remove('form__input--error');
        formImgError.classList.remove('form__img-error--active');
        formValidation.classList.remove('form__validation--active');
		document.body.innerHTML = `<div style="display:flex; min-height: 100vh; align-items: center; justify-content: center; margin: 0;"><h1>Thank you!</h1></div>`;
	}
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}