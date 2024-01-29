const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onInputMessage);
const feedbackFormKey = 'feedback-form-state';

// Load to local storage
function toLocalStorage(key, value) {
  const values = JSON.stringify(value);
  localStorage.setItem(key, values);
}

// Load from local storage
function fromLocalStorage(key) {
  const values = localStorage.getItem(key);
  try {
    return JSON.parse(values);
  } catch {
    return values;
  }
}

function onInputMessage() {
  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  const formValues = {
    email,
    message,
  };
  toLocalStorage(feedbackFormKey, formValues);
}

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(fromLocalStorage(feedbackFormKey));
  localStorage.removeItem(feedbackFormKey);
  feedbackForm.reset();
}
