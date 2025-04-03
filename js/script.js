// Wait for the form to be submitted
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from being submitted to server

    // Get form values
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Form Validation: Check if any field is empty
    if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all the fields.");
        return; // Stop if validation fails
    }

    // Confirm before submission
    let confirmation = confirm("Do you want to submit the form?");
    if (confirmation) {
        // Hide the form and show submitted data
        document.getElementById("contact-form").style.display = "none";
        document.getElementById("submitted-data").style.display = "block";

        // Display the submitted data
        document.getElementById("submitted-first-name").textContent = firstName;
        document.getElementById("submitted-last-name").textContent = lastName;
        document.getElementById("submitted-email").textContent = email;
        document.getElementById("submitted-message").textContent = message;
    }
});

// Function to go back to the form and reset
function goBack() {
    document.getElementById("contact-form").reset(); // Reset form fields
    document.getElementById("contact-form").style.display = "block"; // Show the form
    document.getElementById("submitted-data").style.display = "none"; // Hide the submitted data
}
