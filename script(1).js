function validateForm() {
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

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

    // Add more validation logic as needed

    alert("Form submitted successfully!");
    return true;
}
