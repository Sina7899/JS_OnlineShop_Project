import { products } from "./fixedData.js";

const headerRef = document.querySelector("header");
const mainRef = document.querySelector("main");
const cartRef = document.getElementById("cart");
const cartPageRef = document.getElementById("cartPage");
const pageOverlayRef = document.getElementById("page-overlay");

const cartItems = {
  totalCount: 0,
  itemsCount: {},
};

function addToCartOnClickHandler(item) {
  cartItems.totalCount += 1;

  if (cartItems.itemsCount[item]) {
    cartItems.itemsCount[item] += 1;
  } else {
    cartItems.itemsCount[item] = 1;
  }

  const itemsCountRef = document.getElementById("itemsCount");

  itemsCountRef.innerHTML = cartItems.totalCount;
}

function cartOnClickHandler() {
  cartPageRef.classList.add("display_cart");
  pageOverlayRef.classList.add("active");
  headerRef.classList.add("blur_effect");
  mainRef.classList.add("blur_effect");
  document.body.classList.add("no-scroll");

  const cartContentRef = document.getElementById("cartContent");
  const emptyPar = document.createElement("p");
  const table = document.createElement("table");

  emptyPar.id = "emptyCart";
  table.id = "cartTable";

  const emptyCartRef = document.getElementById("emptyCart");
  const cartTableRef = document.getElementById("cartTable");

  if (cartItems.totalCount === 0 && !emptyCartRef) {
    const textNode = document.createTextNode("Noting Add yet!");

    emptyPar.appendChild(textNode);
    emptyPar.classList.add("empty_cart");

    cartContentRef.appendChild(emptyPar);
  } else if (cartItems.totalCount !== 0) {
    if (emptyCartRef) {
      cartContentRef.removeChild(emptyCartRef);
    }

    if (!cartTableRef) {
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");
      const tfoot = document.createElement("tfoot");
      const tr_1 = document.createElement("tr");
      const th_1 = document.createElement("th");
      const th_2 = document.createElement("th");
      const th_3 = document.createElement("th");
      const th_4 = document.createElement("th");
      const sub_1 = document.createElement("sub");
      const sub_2 = document.createElement("sub");

      const itemColumn = document.createTextNode("Item");
      const countColumn = document.createTextNode("Count");
      const feeColumn = document.createTextNode("Fee");
      const totalColumn = document.createTextNode("Total");

      tbody.id = "tableBody";
      tfoot.id = "tableFooter";

      sub_1.append("($)");
      sub_2.append("($)");

      th_1.appendChild(itemColumn);
      th_2.appendChild(countColumn);
      th_3.append(feeColumn, sub_1);
      th_4.append(totalColumn, sub_2);

      tr_1.append(th_1, th_2, th_3, th_4);
      thead.appendChild(tr_1);
      table.appendChild(thead);
      table.appendChild(tbody);
      table.appendChild(tfoot);

      table.classList.add("cart_table");

      cartContentRef.appendChild(table);
    }

    let cartTotalCost = 0;

    for (let cartItem in cartItems.itemsCount) {
      const tbodyRef = document.getElementById("tableBody");
      const tfootRef = document.getElementById("tableFooter");

      const bodyRow = document.createElement("tr");
      const footerRow = document.createElement("tr");
      const td_1 = document.createElement("td");
      const td_2 = document.createElement("td");
      const td_3 = document.createElement("td");
      const td_4 = document.createElement("td");
      const td_f1 = document.createElement("td");
      const td_f2 = document.createElement("td");

      td_f1.setAttribute("colspan", "3");
      td_f1.style.textAlign = "end";
      td_f2.style.textDecoration = "underline";
      td_f2.style.color = "green";

      let itemCount = cartItems.itemsCount[cartItem];
      let itemPrice = products[cartItem].price;
      let totalPrice = () => {
        return itemCount * itemPrice;
      };
      cartTotalCost += totalPrice();

      const item = document.createTextNode(cartItem);
      const count = document.createTextNode("x" + itemCount.toString());
      const fee = document.createTextNode(itemPrice.toString());
      const total = document.createTextNode(totalPrice());
      const totalCost = document.createTextNode(cartTotalCost + "$");

      td_1.appendChild(item);
      td_2.appendChild(count);
      td_3.appendChild(fee);
      td_4.appendChild(total);
      td_f1.append("Total Cost:");
      td_f2.appendChild(totalCost);

      bodyRow.id = `${cartItem}`;
      footerRow.id = "footerRow";
      td_f2.id = "footerTotalCost";

      const bodyRowRef = document.getElementById(`${cartItem}`);
      const footerRowRef = document.getElementById("footerRow");
      const footerTotalCostRef = document.getElementById("footerTotalCost");

      if (bodyRowRef) {
        bodyRowRef.innerHTML = ""; //Remove All Pervious Child
        bodyRowRef.append(td_1, td_2, td_3, td_4);
      } else {
        bodyRow.append(td_1, td_2, td_3, td_4);
        tbodyRef.appendChild(bodyRow);
      }

      if (footerRowRef) {
        footerRowRef.replaceChild(td_f2, footerTotalCostRef);
      } else {
        footerRow.append(td_f1, td_f2);
        tfootRef.appendChild(footerRow);
      }
    }
  }
}

function cartCloseIconOnClickHandler() {
  cartPageRef.classList.remove("display_cart");
  pageOverlayRef.classList.remove("active");
  headerRef.classList.remove("blur_effect");
  mainRef.classList.remove("blur_effect");
  document.body.classList.remove("no-scroll");
}

export {
  addToCartOnClickHandler,
  cartOnClickHandler,
  cartCloseIconOnClickHandler,
  cartRef,
};
