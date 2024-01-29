function toLocalStorage(key, value) {
  const values = JSON.stringify(value);
  localStorage.setItem(key, values);
}

function fromLocalStorage(key) {
  const values = localStorage.getItem(key);
  try {
    return JSON.parse(values);
  } catch {
    return values;
  }
}

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onInputMessage);
const feedbackFormKey = 'feedback-form-state';

function onInputMessage() {
  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  const formValues = {
    email,
    message,
  };
  toLocalStorage(feedbackFormKey, formValues);
}

function localFormValues() {
  const values = fromLocalStorage(feedbackFormKey) || {};
  feedbackForm.elements.email.value = values.email || '';
  feedbackForm.elements.message.value = values.message || '';
}

localFormValues();

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }
  console.log(fromLocalStorage(feedbackFormKey));
  localStorage.removeItem(feedbackFormKey);
  feedbackForm.reset();
}
