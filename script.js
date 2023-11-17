// script.js
function getFormValue() {
    // Get the form element by its ID
    var form = document.getElementById("myForm");

    // Get the values of the First and Last Name fields
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;

    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the getFormValue function to the form's submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    getFormValue(); // Call the function to handle the form values
});
