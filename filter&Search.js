import { products } from "./fixedData.js";

const selectRef = document.querySelector("select");
const searchInputRef = document.querySelector("input");

function searchAndFilterHandler() {
  const itemsCards = document.querySelectorAll(".product_card");
  const searchContent = searchInputRef.value;
  const optionSelected = selectRef.value;

  switch (searchContent.toLowerCase() || optionSelected.toLowerCase()) {
    case products["Butter Stick"].name.toLowerCase():
    case products["Butter Stick"].title.toLowerCase():
    case products["Butter Stick"].category.toLowerCase():
      itemsCards.forEach((card) => {
        card.classList.add("display_none");
        if (
          card.getAttribute("id") ===
          products["Butter Stick"].category.toLowerCase()
        ) {
          card.classList.remove("display_none");
        }
      });
      break;

    case products["Cheese Block"].name.toLowerCase():
    case products["Cheese Block"].title.toLowerCase():
    case products["Cheese Block"].category.toLowerCase():
      itemsCards.forEach((card) => {
        card.classList.add("display_none");
        if (
          card.getAttribute("id") ===
          products["Cheese Block"].category.toLowerCase()
        ) {
          card.classList.remove("display_none");
        }
      });
      break;

    case products["Cream Jar"].name.toLowerCase():
    case products["Cream Jar"].title.toLowerCase():
    case products["Cream Jar"].category.toLowerCase():
      itemsCards.forEach((card) => {
        card.classList.add("display_none");
        if (
          card.getAttribute("id") ===
          products["Cream Jar"].category.toLowerCase()
        ) {
          card.classList.remove("display_none");
        }
      });
      break;

    case products["Ice Cream Cone"].name.toLowerCase():
    case products["Ice Cream Cone"].title.toLowerCase():
    case products["Ice Cream Cone"].category.toLowerCase():
      itemsCards.forEach((card) => {
        card.classList.add("display_none");
        if (
          card.getAttribute("id") ===
          products["Ice Cream Cone"].category.toLowerCase()
        ) {
          card.classList.remove("display_none");
        }
      });
      break;

    case products["Milk"].name.toLowerCase():
    case products["Milk"].title.toLowerCase():
    case products["Milk"].category.toLowerCase():
      itemsCards.forEach((card) => {
        card.classList.add("display_none");
        if (
          card.getAttribute("id") === products["Milk"].category.toLowerCase()
        ) {
          card.classList.remove("display_none");
        }
      });
      break;

    case products["Yogurt Cup"].name.toLowerCase():
    case products["Yogurt Cup"].title.toLowerCase():
    case products["Yogurt Cup"].category.toLowerCase():
      itemsCards.forEach((card) => {
        card.classList.add("display_none");
        if (
          card.getAttribute("id") ===
          products["Yogurt Cup"].category.toLowerCase()
        ) {
          card.classList.remove("display_none");
        }
      });
      break;

    case "all":
    case "":
      itemsCards.forEach((card) => {
        card.classList.remove("display_none");
      });
      break;

    default:
      alert("Nothing Matched!");
      break;
  }
}

export { searchAndFilterHandler, selectRef, searchInputRef };
