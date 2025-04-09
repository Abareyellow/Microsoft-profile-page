document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// Form validation
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.remove());

    // Validate Name
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.');
        isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required.');
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    } else {
        // If valid, you can proceed with form submission (e.g., send data to server)
        alert('Form submitted successfully!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});

// Helper function to display error messages
function showError(input, message) {
    const error = document.createElement('span');
    error.className = 'error';
    error.style.color = 'red';
    error.style.fontSize = '0.9rem';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}