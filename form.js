const fullName1 = document.querySelector("#name");
const email1 = document.querySelector("#email");
const passWord1 = document.querySelector("#password");
const confrimPassword1 = document.querySelector("#confirm-password");
const form = document.querySelector("#form")


form.addEventListener("sumbit", function(e)
{
    e.preventDefault();
}
);

const isRequired = value => value === '' ? false: true;
//*isRequired function checks if the input value is an empty string. If it is empty, the function returns false, indicating that the value is not required or invalid. If the value is not empty, it returns true, indicating that the value is required or valid*/
function isBetween (length, min, max)  { 
    const between = length <min || length > max ? false : true;
    console.log(length);
    console.log(min);
    console.log(max);
    return between;
    
}




//* "isBetween" function checks if the input "length" is within a specified range defined by "min" and "max". If the "length" is within this range, it returns "true", indicating that it falls within the specified range. If the "length" is outside this range, it returns false, indicating that it's not within the specified range */
isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} //*isEmailValid function uses a regular expression to validate whether an email address is in a valid format. If the email matches the pattern, it returns true, indicating that the email is valid. If the email does not match the pattern, it returns false, indicating that the email is not valid*//

const isPasswordSecure = (passWord)=> {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(passWord);
};

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove ('success');
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
    const min=2,
    max = 25;
    const fullName = fullName1.value.trim();
    if (!isRequired(fullName)) { 
        console.log(isRequired);
        showError( fullName1, "Name cannot be blank.");
    } else if (!isBetween(fullName1.value.length,min, max)){
        console.log(isBetween);

        showError(fullName1, `Name must be between ${min} and ${max} characters.`)
    } else {
        console.log(showError);

        showSuccess(fullName1);
        valid=true;
    }
    return valid;
    }

    const checkEmail = ()=> {
        let valid = false;
        const email = email1.value.trim();
        if (!isRequired(email)){
            showError(email1, "Email cannot be blank.");
        }else if (!isEmailValid(email)) {
            showError(email1,"Email is not valid.")
        } else {
            showSuccess(email1);
            valid= true;
        }
        return valid;
    }

    const checkPassword = () => {
        let valid=false;
        const passWord = passWord1.value.trim();
        if (!isRequired(passWord)) {
            showError(passWord1, "Password cannot be blank.");
        } else if (!isPasswordSecure(passWord)){
            showError(passWord1, "Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 specail character.")
        } else{
            showSuccess(passWord1);
            valid = true;
        }
        return valid;
    }

    const checkConfirmPassword= ()=> {
        let valid = false;
        const confrimPassword = confrimPassword1.value.trim();
        const password = passWord1.value.trim();

        if (isRequired(confrimPassword)){
            showError(confrimPassword1, "please enter the password again");
        } else if (password !== confrimPassword){
            showError(confrimPassword1, "password does not match");
        } else {
            showSuccess(confrimPassword1);
            valid=true;
        }
        return valid;
    };

    form.addEventListener("submit", function(e)
    {e.preventDefault();

    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isPasswordvalid = checkPassword(),
        isConfirmpasswordvalid = checkConfirmPassword();
        
        let isFormValid = isNameValid &&
        isEmailValid&&
        isPasswordvalid&&
        isConfirmpasswordvalid;
        if (isFormValid){}
});

form.addEventListener("input", function(e){
switch (e.target.id){
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
}});

   