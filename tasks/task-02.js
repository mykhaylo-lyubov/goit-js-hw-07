const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredientsList = (product) => {
  const ingredientsListRef = document.querySelector("#ingredients");
  const list = document.createElement("li");
  list.textContent = product;
  ingredientsListRef.appendChild(list);
};

const newIngredients = ingredients.map((product) =>
  createIngredientsList(product)
);
