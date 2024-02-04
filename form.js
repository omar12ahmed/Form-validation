const fullName1 = document.querySelector("#name");
const email1 = document.querySelector("#email");
const passWord1 = document.querySelector("#password");
const confirmPassword1 = document.querySelector("#confirm-password");
const form = document.querySelector("#form")


form.addEventListener("submit", function (e) {
    e.preventDefault();
}
);

const isRequired = value => value === '' ? false : true;
//*isRequired function checks if the input value is an empty string. If it is empty, the function returns false, indicating that the value is not required or invalid. If the value is not empty, it returns true, indicating that the value is required or valid*/
function isBetween(length, min, max) {
    const between = length < min || length > max ? false : true;

    return between;

}




isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const isPasswordSecure = (passWord) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(passWord);
};

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add("error")
    const error = formField.querySelector("small");
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success")
    const error = formField.querySelector("small");
    error.textContent = "";
};


const checkName = () => {
    let valid = false;
    const min = 2,
        max = 25;
    const fullName = fullName1.value.trim();
    if (!isRequired(fullName)) {
        showError(fullName1, "Name cannot be blank.");
    } else if (!isBetween(fullName1.value.length, min, max)) {
        showError(fullName1, `Name must be between ${min} and ${max} characters.`)
    } else {

        showSuccess(fullName1);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = email1.value.trim();
    if (!isRequired(email)) {
        showError(email1, "Email cannot be blank.");
    } else if (!isEmailValid(email)) {
        showError(email1, "Email is not valid.")
    } else {
        showSuccess(email1);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    const passWord = passWord1.value.trim();
    if (!isRequired(passWord)) {
        showError(passWord1, "Password cannot be blank.");
    } else if (!isPasswordSecure(passWord)) {
        showError(passWord1, "Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 specail character.")
    } else {
        showSuccess(passWord1);
        valid = true;
    }
    return valid;
}

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPasswordValue = confirmPassword1.value;
    const password = passWord1.value;


    if (!isRequired(confirmPasswordValue)) {
        showError(confirmPassword1, "Please enter the password again");
    } else if (password !== confirmPasswordValue) {
        showError(confirmPassword1, "Password does not match");
    } else {
        showSuccess(confirmPassword1);
        valid = true;
    }
    return valid;
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isPasswordvalid = checkPassword(),
        isConfirmpasswordvalid = checkConfirmPassword();

    let isFormValid = isNameValid &&
        isEmailValid &&
        isPasswordvalid &&
        isConfirmpasswordvalid;
    if (isFormValid) {
        window.alert("Form is Valid, thanks!")
    } else {
        window.alert("Please fill in all required fields")
    }
});

form.addEventListener("input", function (e) {
    switch (e.target.id) {
        case "name":
            checkName();
            break;
        case "email":
            checkEmail();
            break;
        case "password":
            checkPassword();
            break;
        case "confirm-password":
            checkConfirmPassword();
            break;
    }
});

