const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const successMessage = document.querySelector("#successMessage");


form.addEventListener("submit", function (event) {
//نشون میده که صفحه ربلود نشه که لتونی قبل از پیام ثبت ریلود نمشه
// و نشون بده پیام ثبت رو
    event.preventDefault();
// یعنی همه چی چک شده میتونی بری بعدی
    let isValid = true;

    // Clear previous success message
    successMessage.textContent = "";


    // Name
    if (nameInput.value.trim() === "") {

        showError(nameInput, "Name is required.");
        isValid = false;

    } else {

        clearError(nameInput);
    }


    // Email
    if (emailInput.value.trim() === "") {

        showError(emailInput, "Email is required.");
        isValid = false;

    } else if (!emailInput.value.includes("@")) {

        showError(emailInput, "Please enter a valid email.");
        isValid = false;

    } else {

        clearError(emailInput);
    }


    // Password
    if (passwordInput.value === "") {

        showError(passwordInput, "Password is required.");
        isValid = false;

    } else if (passwordInput.value.length < 8) {

        showError(
            passwordInput,
            "Password must be at least 8 characters."
        );

        isValid = false;

    } else {

        clearError(passwordInput);
    }


    // Confirm Password
    if (confirmPasswordInput.value === "") {

        showError(
            confirmPasswordInput,
            "Please confirm your password."
        );

        isValid = false;

    } else if (
        confirmPasswordInput.value !== passwordInput.value
    ) {

        showError(
            confirmPasswordInput,
            "Passwords do not match."
        );

        isValid = false;

    } else {

        clearError(confirmPasswordInput);
    }


    // Success
    if (isValid) {

        successMessage.textContent =
            "Account created successfully!";

        form.reset();
    }

});


function showError(input, message) {

    input.classList.add("error-input");
//خب این میگه برو این ارور ما رو توی قسمت المنت بعدی اینپوت یعنی توی اسمال نشون بده
// برای همین ارور توی قسمت اسمال پایین اینپویت دید هیمشه 
    const errorMessage = input.nextElementSibling;

    errorMessage.textContent = message;
}

// پرامتر 
// فانکشن یه پرامپتر میگیه که المنت اینپچوت هست 
function clearError(input) {

    input.classList.remove("error-input");

    const errorMessage = input.nextElementSibling;

errorMessage.textContent = "";
}
