// // 🚀 Part 1: Variables, Data Types & Conditionals
// let age = 20;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// // 🚀 Part 2: Functions
// // Function 1: Square a number
// function square(num) {
//   return num * num;
// }
// console.log("Square of 4:", square(4));

// // Function 2: Calculate total price
// function calculateTotal(price, quantity) {
//   return price * quantity;
// }
// console.log("Total price:", calculateTotal(50, 3));

// // 🚀 Part 3: Loops
// // For loop: countdown
// for (let i = 5; i > 0; i--) {
//   console.log("Countdown:", i);
// }

// // While loop: iterating through array
// let fruits = ["Apple", "Banana", "Cherry"];
// let index = 0;
// while (index < fruits.length) {
//   console.log("Fruit:", fruits[index]);
//   index++;
// }

// // 🚀 Part 4: DOM Manipulation
// const title = document.getElementById("title");
// const message = document.getElementById("message");
// const changeTextBtn = document.getElementById("changeTextBtn");
// const toggleColorBtn = document.getElementById("toggleColorBtn");
// const addItemBtn = document.getElementById("addItemBtn");
// const itemList = document.getElementById("itemList");

// // 1. Change text content
// changeTextBtn.addEventListener("click", () => {
//   message.textContent = "Text has been changed!";
// });

// // 2. Toggle color class
// toggleColorBtn.addEventListener("click", () => {
//   title.classList.toggle("red");
// });

// // 3. Add a new item to the list
// addItemBtn.addEventListener("click", () => {
//   const newItem = document.createElement("li");
//   newItem.textContent = "New Item " + (itemList.children.length + 1);
//   itemList.appendChild(newItem);
// });

// Part 4: DOM Manipulation using onclick
function changeText() {
  document.getElementById("message").textContent = "Text has been changed!";
}

function toggleColor() {
  document.getElementById("title").classList.toggle("red");
}

function addItem() {
  const itemList = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item " + (itemList.children.length + 1);
  itemList.appendChild(newItem);
}
