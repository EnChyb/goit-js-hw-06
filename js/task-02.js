const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("#ingredients");

const createList = ingredients.forEach((ingerdient, index) => {
  const list = document.createElement("li");
  list.className = "item";
  list.textContent = ingredients[index];
  ulList.append(list);
})