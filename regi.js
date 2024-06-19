document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you can add code to handle form submission, e.g., send data to the server
    console.log('Form submitted!');
    console.log('Username:', username);
    console.log('Email:', email);

    alert('Registration successful!');
});
