document.addEventListener('DOMContentLoaded', function() { 
    function updateTime() { 
        const now = new Date(); 
        const timeString = now.toLocaleTimeString(); 
        document.getElementById('current-time').textContent = `Current Time: ${timeString}`;
     }
      setInterval(updateTime, 1000); // Update time every second
      updateTime(); // Initial call to set the time immediately
    });
function validateForm() {
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var termsCheckbox = document.getElementById("termsCheckbox");
    var loginButton = document.getElementById("loginButton");
    var successMessage = document.getElementById("successMessage");

    // Validate phone number (10 digits)
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Validate email address
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate date of birth and check age
    var dateOfBirth = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dateOfBirth.getFullYear();
    var monthDifference = today.getMonth() - dateOfBirth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    if (age < 18) {
        alert("You must be at least 18 years old to register.");
        return false;
    }

    // Check if terms and conditions checkbox is checked
    if (!termsCheckbox.checked) {
        alert("You must agree to the terms and conditions.");
        return false;
    }

    // Enable login button if all validations pass
    loginButton.disabled = false;

    // Show success message with animation
    alert('You have successfully logged in!'); 
    window.location.href = 'index.html'; // Redirect to the index page

    return true;
}

function toggleLoginButton() {
    // Check age validation whenever terms checkbox is toggled
    const dob = document.getElementById('dob').value;
    const termsCheckbox = document.getElementById('termsCheckbox');
    const loginButton = document.getElementById('loginButton');
    const dateOfBirth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    loginButton.disabled = !(age >= 18 && termsCheckbox.checked);
}
// script.js
document.getElementById('terms-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action (navigating to the link)

    // Confirm navigation
    let userConfirmed = confirm('Do you want to view the Terms and Conditions?');
    
    if (userConfirmed) {
        window.location.href = this.href; // Navigate to the link if user confirmed
    }
});
