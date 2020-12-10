const itemsRef = document.querySelectorAll("#categories .item");
console.log(`В списке ${itemsRef.length} категории.`);

for (const item of itemsRef) {
  console.log(
    `Категория: ${item.firstElementChild.textContent}\nКоличество элементов: ${
      item.querySelectorAll("li").length
    }`
  );
}
