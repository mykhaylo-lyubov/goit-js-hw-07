const sizeControlBtnRef = document.querySelector("#font-size-control");
const textToControlRef = document.querySelector("#text");

const inputValueHandler = (event) => {
  textToControlRef.style.fontSize = `${event.target.value}px`;
};

sizeControlBtnRef.addEventListener("input", inputValueHandler);
