// signup.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the signup form element
    const signupForm = document.getElementById('signup-form');

    // Add event listener for form submission
    signupForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the form values
        const email = signupForm.email.value;
        const firstName = signupForm.firstName.value;
        const lastName = signupForm.lastName.value;
        const username = signupForm.username.value;
        const password = signupForm.password.value;

        // Create an object to store the credentials
        const credentials = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        };

        // Convert the credentials object to JSON string
        const credentialsJSON = JSON.stringify(credentials);

        // Write the credentials to the creds.json file
        const fs = require('fs');
        fs.writeFileSync('creds.json', credentialsJSON);

        // Optionally, you can redirect the user to the login page
        window.location.href = 'login.html';
    });
});
