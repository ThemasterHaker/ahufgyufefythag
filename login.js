// login.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the login form element
    const loginForm = document.getElementById('login-form');

    // Read credentials from the creds.json file
    const fs = require('fs');
    const credentialsJSON = fs.readFileSync('creds.json');
    const storedCredentials = JSON.parse(credentialsJSON);

    // If credentials are found in the JSON file, pre-fill the login form
    if (storedCredentials) {
        loginForm.email.value = storedCredentials.email;
        loginForm.password.value = storedCredentials.password;
    }

    // Add event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email and password values from the form
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // Perform basic validation
        if (!email.trim()) {
            alert('Please enter your email.');
            return;
        }

        if (!password.trim()) {
            alert('Please enter your password.');
            return;
        }

        // Assuming the login is successful
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    });
});
