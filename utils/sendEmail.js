import toggleModal from "./toggleModal.js";

const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;
  
  // document.querySelector(".contact-form").reset();
  
  if (name === '' || email === '' || subject === '' || message === '') {
    toggleModal('#form-incomplete')
  } else {
    sendEmail(subject, name, email, message);
  }
} )

function sendEmail(subject, name, email, message) {
  const tempParams = {
    subject: subject,
    name: name,
    email: email,
    message: message,
    reply_to: email,
  };

  emailjs.send('gmail-service', 'contact-form', tempParams)
    .then(res => {
      toggleModal('#form-success')
    })
    .catch(error => {
      toggleModal('#form-error');
    })
}