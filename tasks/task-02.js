const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListRef = document.querySelector("#ingredients");

const createIngredientsList = (product) => {
  const listItem = document.createElement("li");
  listItem.textContent = product;
  return listItem;
};

const newIngredients = ingredients.map((product) =>
  createIngredientsList(product)
);

ingredientsListRef.append(...newIngredients);
