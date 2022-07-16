const userSignUpForm = document.querySelector("#sign-up"),
  userName = document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  personalNumber = document.querySelector("#personalnumber"),
  mobileNumber = document.querySelector("#mobilenumber"),
  position = document.querySelector("#position"),
  userNameError = document.querySelector("#username-error"),
  passwordError = document.querySelector("#password-error"),
  emailError = document.querySelector("#email-error"),
  personalNumberError = document.querySelector("#personalnumber-error"),
  mobileNumberError = document.querySelector("#mobilenumber-error"),
  positionError = document.querySelector("#position-error");

userSignUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValidUserName = validateUserName();
  const isValidEmail = validateEmail();
  const isValidPassword = validatePassword();
  const isValidPersonalNumber = validatePersonalNumber();
  const isValidMobileNumber = validateMobileNumber();
  const isValidPosition = validatePosition();
});

function validateUserName() {
  if (!userName.validity.valid) {
    userName.classList.add("error");
    userNameError.textContent = "User Name required";
    return false;
  } else {
    userNameError.textContent = "";
    userName.classList.remove("error");
    return true;
  }
}

function validateEmail() {
  if (!email.validity.valid) {
    email.classList.add("error");
    emailError.textContent = "Email required";
    if (email.validity.typeMismatch) {
      emailError.textContent = "Email is not valid";
    }
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  if (password.value.length <= 4) {
    password.classList.add("error");
    passwordError.textContent = "Password must be 4 or more characters";
    return false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    return true;
  }
}

function validatePersonalNumber() {
  if (!personalNumber.value.length != 11) {
    personalNumber.classList.add("error");
    let pN = /^[0-9]{11}$/;
    if (!pN.test(personalNumber.value)) {
      personalNumberError.textContent = "Personal Number must have 11 numbers";
    }
    return false;
  } else {
    personalNumberError.textContent = "";
    personalNumber.classList.remove("error");
    return true;
  }
}

function validateMobileNumber() {
  if (!mobileNumber.value.length != 9) {
    mobileNumber.classList.add("error");
    let mN = /^[0-9]{9}$/;
    if (!mN.test(mobileNumber.value)) {
      mobileNumberError.textContent = "Mobile Number must have 9 numbers";
    }
    return false;
  } else {
    mobileNumberError.textContent = "";
    mobileNumber.classList.remove("error");
    return true;
  }
}

function validatePosition() {
  if (position.value.length <= 0) {
    position.classList.add("error");
    positionError.textContent = "Position is empty";
    if (position.value.length >= 30) {
      positionError.textContent =
        "Position must not have more than 30 characters";
    }
    return false;
  } else {
    positionError.textContent = "";
    position.classList.remove("error");
    return true;
  }
}
