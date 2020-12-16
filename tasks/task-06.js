const inputToValidateRef = document.querySelector("#validation-input");
const requiredNumberOfSymbols = inputToValidateRef.getAttribute("data-length");

const checkForValidInput = (event) => {
  inputToValidateRef.classList.add("invalid");
  inputToValidateRef.classList.remove("valid");
  if (event.target.value.length === Number(requiredNumberOfSymbols)) {
    inputToValidateRef.classList.remove("invalid");
    inputToValidateRef.classList.add("valid");
  }
};

inputToValidateRef.addEventListener("blur", checkForValidInput);
