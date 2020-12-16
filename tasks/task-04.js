const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = valueRef.textContent;

const increment = function (num) {
  return (num += 1);
};

const decrement = function (num) {
  return (num -= 1);
};

const decrementBtnHandler = () => {
  counterValue = decrement(Number(counterValue));
  valueRef.textContent = counterValue;
};

const incrementBtnHandler = () => {
  counterValue = increment(Number(counterValue));
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener("click", decrementBtnHandler);

btnIncrementRef.addEventListener("click", incrementBtnHandler);
