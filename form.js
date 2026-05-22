// form 
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload

    let hasError = false;
    successBox.innerText = ""; // clear old success message

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name cannot be empty";
        hasError = true;
    } else {
        nameError.innerText = "";
    }

    // Validate Email
    if (!emailInput.value.includes("@")) {
        emailError.innerText = "Invalid email format";
        hasError = true;
    } else {
        emailError.innerText = "";
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
        messageError.innerText = "Message cannot be empty";
        hasError = true;
    } else {
        messageError.innerText = "";
    }

    // If no error → success message
    if (!hasError) {
        successBox.innerText = "Message sent successfully!";
        successBox.classList.add("success");
        form.reset();
    }
});