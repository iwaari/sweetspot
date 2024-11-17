// // Initialize users in localStorage if not present
// if (!localStorage.getItem('users')) {
//     localStorage.setItem('users', JSON.stringify([]));
// }

// // Handle Signup
// function handleSignup(event) {
//     event.preventDefault();
//     const username = document.getElementById('signup-username').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     let users = JSON.parse(localStorage.getItem('users'));

//     if (users.some(user => user.email === email)) {
//         alert('Email is already registered!');
//         return;
//     }

//     users.push({ username, email, password });
//     localStorage.setItem('users', JSON.stringify(users));
//     alert('Sign-up successful!');
//     SignupPopup();
//     LoginPopup();
// }

// // Handle Login
// function handleLogin(event) {
//     event.preventDefault();
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     let users = JSON.parse(localStorage.getItem('users'));
//     let user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//         localStorage.setItem('loggedInUser', JSON.stringify(user));
//         alert('Login successful!');
//         LoginPopup();
//         checkLoginStatus();
//     } else {
//         alert('Invalid email or password.');
//     }
// }

// // Logout function
// // function logout() {
// //     localStorage.removeItem('loggedInUser');
// //     alert('Logged out successfully!');
// //     checkLoginStatus();
// // }
// function logout() {
//     // Remove the logged-in user from localStorage
//     localStorage.removeItem('loggedInUser');
    
//     // Alert the user
//     alert('Logged out successfully!');
    
//     // Hide the profile popup
//     const popup = document.getElementById('profile-popup');
//     popup.style.display = 'none';
    
//     // Update the UI to show the authentication buttons and hide the profile section
//     checkLoginStatus();
// }

// // Check Login Status on page load
// // function checkLoginStatus() {
// //     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// //     if (loggedInUser) {
// //         document.getElementById('greeting-section').style.display = 'block';
// //         document.getElementById('main-username').textContent = loggedInUser.username;
// //         document.getElementById('profile-section').style.display = 'block';
// //         document.getElementById('auth-buttons').style.display = 'none';
// //     } else {
// //         document.getElementById('greeting-section').style.display = 'none';
// //         document.getElementById('profile-section').style.display = 'none';
// //         document.getElementById('auth-buttons').style.display = 'block';
// //     }
// // }
// // Check Login Status on page load
// window.onload = checkLoginStatus;

// function checkLoginStatus() {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//     if (loggedInUser) {
//         // Show the profile button and hide auth buttons
//         document.getElementById('profile-section').style.display = 'block';
//         document.getElementById('auth-buttons').style.display = 'none';
//     } else {
//         // Hide the profile button and show auth buttons
//         document.getElementById('profile-section').style.display = 'none';
//         document.getElementById('auth-buttons').style.display = 'block';
//     }
// }



// // Popup toggles
// function LoginPopup() {
//     document.getElementById('login-popup').classList.toggle('show');
// }

// function SignupPopup() {
//     document.getElementById('signup-popup').classList.toggle('show');
// }

// // Run checkLoginStatus when the page loads
// function toggleProfilePopup() {
//     const popup = document.getElementById('profile-popup');
//     if (popup.style.display === 'none' || popup.style.display === '') {
//         // Show the popup and populate user information
//         const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//         if (loggedInUser) {
//             document.getElementById('profile-username').textContent = `Username: ${loggedInUser.username}`;
//             document.getElementById('profile-email').textContent = `Email: ${loggedInUser.email}`;
//         }
//         popup.style.display = 'block';
//     } else {
//         // Hide the popup
//         popup.style.display = 'none';
//     }
// }
// Initialize users in localStorage if not present
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    let users = JSON.parse(localStorage.getItem('users'));

    if (users.some(user => user.email === email)) {
        alert('Email is already registered!');
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign-up successful!');
    SignupPopup(); // Close signup popup
    LoginPopup();   // Open login popup
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        LoginPopup();  // Close login popup
        checkLoginStatus();  // Update UI
    } else {
        alert('Invalid email or password.');
    }
}

// Logout function
function logout() {
    // Remove the logged-in user from localStorage
    localStorage.removeItem('loggedInUser');
    
    // Alert the user
    alert('Logged out successfully!');
    
    // Hide the profile popup
    const popup = document.getElementById('profile-popup');
    popup.style.display = 'none';
    
    // Update the UI to show the authentication buttons and hide the profile section
    checkLoginStatus();
}

// Check Login Status on page load
function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Show the profile button and hide auth buttons
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('auth-buttons').style.display = 'none';
    } else {
        // Hide the profile button and show auth buttons
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('auth-buttons').style.display = 'block';
    }
}

// Popup toggles
function LoginPopup() {
    document.getElementById('login-popup').classList.toggle('show');
}

function SignupPopup() {
    document.getElementById('signup-popup').classList.toggle('show');
}

// Profile Popup
function toggleProfilePopup() {
    const popup = document.getElementById('profile-popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        // Show the popup and populate user information
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            document.getElementById('profile-username').textContent = `Username: ${loggedInUser.username}`;
            document.getElementById('profile-email').textContent = `Email: ${loggedInUser.email}`;
        }
        popup.style.display = 'block';
    } else {
        // Hide the popup
        popup.style.display = 'none';
    }
}

// Ensure checkLoginStatus is run once when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();  // Check login status on page load
});
