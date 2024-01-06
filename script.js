// Validate Email Address ----------------------------------------
const form = document.getElementById("form"),
    emailInput = document.getElementById("email"),
    emailErrorEl = document.getElementById("email-error");

// Email validate function
let valEmail = (input) => {
    // Regex is pattern to validate email
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!(input.value.match(validRegex))
}

// When the form submit
form.addEventListener("submit", (e) => {
    e.preventDefault()
    valEmail(emailInput) ? form.submit() : showError(true);
})

// When got error
function showError(status) {
    if(status) {
    emailErrorEl.style.display = "block";
    emailInput.style.background = "#ffc2b3";
    emailInput.style.borderColor = "var(--tomato)";
    }
}

