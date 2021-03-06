const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryRef = document.querySelector("#gallery");
galleryRef.classList.add("js-styles");

//========== via .map ================
// const stringToInsertImg = images.map(
//   (item) => `<li><img src="${item.url}" alt="${item.alt}" width="50%"></li>`
// );

// ============== via .map and .join  ================
// const stringToInsertImg = images
//   .map(
//     (item) => `<li><img src="${item.url}" alt="${item.alt}" width="50%"></li>`
//   )
//   .join("");

//=============== via .reduce ====================
const stringToInsertImg = images.reduce(
  (acc, item) =>
    acc + `<li><img src="${item.url}" alt="${item.alt}" width="50%"></li>`,
  ""
);

galleryRef.insertAdjacentHTML("afterbegin", stringToInsertImg);
