const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = valueRef.textContent;
console.log(counterValue);
const increment = function (num) {
  return (num += 1);
};
const decrement = function (num) {
  return (num -= 1);
};

btnDecrementRef.addEventListener("click", () => {
  counterValue = decrement(Number(counterValue));
  return (valueRef.textContent = counterValue);
});

btnIncrementRef.addEventListener("click", () => {
  counterValue = increment(Number(counterValue));
  return (valueRef.textContent = counterValue);
});
