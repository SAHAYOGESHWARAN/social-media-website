

// Responsive navigation bar toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// app.js
async function loginUser(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    
    if (response.ok) {
        alert('Login successful!');
        // You might want to store the token in local storage and redirect the user
        localStorage.setItem('token', data.token);
        // Redirect to a protected route or homepage
        window.location.href = 'index.html'; // Adjust the URL as needed
    } else {
        alert(data.message);
    }
}
