document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Simple validation
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
