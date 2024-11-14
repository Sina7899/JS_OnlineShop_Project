import {
  addToCartOnClickHandler,
  cartOnClickHandler,
  cartCloseIconOnClickHandler,
  cartRef,
} from "./cart.js";

import {
  searchAndFilterHandler,
  selectRef,
  searchInputRef,
} from "./filter&Search.js";

console.log("hello");

const userName = prompt("Please Enter Your Name:");

const userNameRef = document.getElementById("userName");
const addButtons = document.querySelectorAll("button");
const closeCartIconRef = document.getElementById("closeCartPage");
const searchIconRef = document.getElementById("searchIcon");

if (userName) {
  userNameRef.innerHTML = userName.charAt(0).toUpperCase() + userName.slice(1);
} else {
  userNameRef.innerHTML = "";
}

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    addToCartOnClickHandler(event.target.name);
  });
});

cartRef.addEventListener("click", cartOnClickHandler);

closeCartIconRef.addEventListener("click", cartCloseIconOnClickHandler);

searchIconRef.addEventListener("click", searchAndFilterHandler);
searchInputRef.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchAndFilterHandler();
  }
});

selectRef.addEventListener("change", searchAndFilterHandler);
