let currentStep = 0; // track the current step
const steps = document.querySelectorAll('.form-step');

function showStep(step) {
    steps.forEach((stepEl, index) => {
        stepEl.classList.toggle('active', index === step);
    });
}

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function validateCurrentStep() {
    let valid = true;

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm_password');
    const messageField = document.getElementById('message');

    clearErrors();

    // Validate Step 1
    if (currentStep === 0) {
        if (nameField.value.trim() === '') {
            showError(nameField, 'Name is required');
            valid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailField.value.trim() === '') {
            showError(emailField, 'Email is required');
            valid = false;
        } else if (!emailPattern.test(emailField.value)) {
            showError(emailField, 'Invalid email format');
            valid = false;
        }
    }

    // Validate Step 2
    if (currentStep === 1) {
        if (subjectField.value === '') {
            showError(subjectField, 'Please select a city');
            valid = false;
        }

        if (passwordField.value.trim() === '') {
          showError(passwordField, 'Password is required');
          valid = false;
      } else if (passwordField.value.length < 8) {
          showError(passwordField, 'Password must be at least 8 characters');
          valid = false;
      }
  
      // Confirm Password Validation
      if (confirmPasswordField.value.trim() === '') {
          showError(confirmPasswordField, 'Please confirm your password');
          valid = false;
      } else if (confirmPasswordField.value !== passwordField.value) {
          showError(confirmPasswordField, 'Passwords do not match');
          valid = false;
      }
  
    }

    // Validate Step 3
    if (currentStep === 2) {
        if (messageField.value.trim() === '') {
            showError(messageField, 'Order message is required');
            valid = false;
        }
    }

    return valid;
}

function showError(inputElement, message) {
    const parentDiv = inputElement.parentElement;
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.style.color = 'red';
    errorElement.innerText = message;
    parentDiv.appendChild(errorElement);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(error => error.remove());
}

//Handle form submission
document.getElementById('order').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateCurrentStep()) {
        const formData = new FormData(event.target);
        console.log('Form Data Submitted:', Object.fromEntries(formData));
        alert('Order submitted successfully!');
    }
});

//popup
  function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}
//button show time
const button = document.getElementById('toggle-time');
const timeDisplay = document.getElementById('time-display');
let isTimeVisible = false;  

button.addEventListener('click', function() {
    if (!isTimeVisible) {
        const currentTime = new Date().toLocaleTimeString();
        timeDisplay.textContent = `Current Time: ${currentTime}`;
        timeDisplay.classList.add('show'); // Add the show class
        isTimeVisible = true;
        button.textContent = 'Hide Current Time';  
    } else {
        timeDisplay.classList.remove('show'); // Remove the show class
        isTimeVisible = false;
        button.textContent = 'Show Current Time'; 
    }
});


//sound effect
const submitButton = document.querySelector('button[type="submit"]');
const submitSound = document.getElementById('submitSound');

submitButton.addEventListener('click', (event) => {
    submitSound.currentTime = 0; 
    submitSound.play(); 
});
function LoginPopup() {
    const overlay = document.getElementById('login-popup');
    overlay.classList.toggle('show');
}
function SignupPopup() {
    const overlay = document.getElementById('signup-popup');
    overlay.classList.toggle('show');
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwxrr9gY3hHl86SuG0uv8nQa0NJHnmqFYqzCzrqM0w4wWDuE-B--j9r9iwch5FHZK6o/exec'


const form = document.forms['login-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
