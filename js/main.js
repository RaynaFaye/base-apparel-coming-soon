const form = document.querySelector('.container__form');
const tooltip = document.querySelector('.tooltip');
const errorIcon = document.querySelector('.error-icon');
const emailInput = document.querySelector('.container__form__email-input');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInputValue = event.target.email.value;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regexEmail.test(emailInputValue)) {
    tooltip.style.display = 'block';
    errorIcon.style.display = 'block';
    emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
  } else {
    tooltip.style.display = 'none';
    errorIcon.style.display = 'none';
    emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
  }
});
