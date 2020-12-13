const inputRef = document.querySelector("input#name-input");
const nameOutputRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent = event.target.value;
  if (event.target.value === "") {
    nameOutputRef.textContent = "незнакомец";
  }
});
