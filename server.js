// Initialize JSON in Local Storage if not present
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Signup function to create a new account
function handleSignup(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem('users'));

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert('Email is already registered!');
        return;
    }

    // Add new user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign-up successful!');

    // Close the signup popup and open the login popup
    SignupPopup();
    LoginPopup();
}

// Login function to handle user authentication
function handleLogin(event) {
    event.preventDefault();

    // Get form data
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve users from local storage
    let users = JSON.parse(localStorage.getItem('users'));

    // Find the user by email and password
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Save the logged-in user to local storage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');

        // Close the login popup
        LoginPopup();
    } else {
        alert('Invalid email or password.');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
}

// Toggle Login Popup
function LoginPopup() {
    const overlay = document.getElementById('login-popup');
    overlay.classList.toggle('show');
}

// Toggle Signup Popup
function SignupPopup() {
    const overlay = document.getElementById('signup-popup');
    overlay.classList.toggle('show');
}
console.log(localStorage.getItem('users'));
console.log(localStorage.getItem('loggedInUser'));

// Call this function on page load to check if the user is already logged in
function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Show the greeting section and display the username
        document.getElementById('greeting-section').style.display = 'block';
        document.getElementById('main-username').textContent = loggedInUser.username;

        // Show the profile section and hide auth buttons
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('auth-buttons').style.display = 'none';
    } else {
        // Hide the greeting if no user is logged in
        document.getElementById('greeting-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('auth-buttons').style.display = 'block';
    }
}

// Handle user login
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        LoginPopup(); // Close the login popup
        checkLoginStatus(); // Update display
    } else {
        alert('Invalid email or password.');
    }
}

// Logout function to clear the current session and update the display
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    checkLoginStatus(); // Refresh the display based on login status
}

// Call checkLoginStatus on page load
window.onload = checkLoginStatus;
