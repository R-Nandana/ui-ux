function validateForm() {
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var dateofbirth = document.getElementById("dob").value;

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

    // Validate dob
    var dateOfBirth = new Date(dob); 
    var today = new Date(); let age = today.getFullYear() - dateOfBirth.getFullYear(); 
    var monthDifference = today.getMonth() - dateOfBirth.getMonth(); 
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) { age--; } 
    if (age >= 18 && termsCheckbox.checked) { 
        loginButton.disabled = false;
     } else { loginButton.disabled = true; }

    // Add more validation logic as needed

    alert("Form submitted successfully!");
    return true;
}