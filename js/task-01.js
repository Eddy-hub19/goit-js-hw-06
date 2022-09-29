// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// -----------------------------version 1------------------------------------------- //

// const listEl = document.querySelector("#categories")
// console.log("Number of categories:", listEl.children.length)

// const itemEl = listEl.querySelectorAll(".item h2")
// const elementItems = listEl.querySelectorAll(".item ul")

// const getItems = itemEl.forEach((item) => {
//     console.log("Category:", item.textContent)
// })
// const getEl = elementItems.forEach((el) => {
//     console.log("Element:", el.children.length)
// })

// -------------------------------version 2----------------------------------------- //

// const listEl = document.querySelector("#categories")
// console.log("Number of categories:", listEl.children.length)

// const itemEl = listEl.querySelectorAll(".item")

// function getTotal() {
//     itemEl.forEach((el) => {
//         const getItems = el.firstElementChild.textContent
//         const getEl = el.lastElementChild.childElementCount

//         console.log("Category", getItems)
//         console.log("Element", getEl)
//     })
// }

// getTotal(itemEl)

// --------------------------------version 3-------------------------------- //

// const listEl = document.querySelector("#categories")
// const itemEl = document.querySelectorAll(".item")
// const categoriesQuantity = itemEl.length

// console.log("Number of categories:", categoriesQuantity)

// const categoriesTotal = () => {
//     itemEl.forEach((el) => {
//         const getItems = el.firstElementChild.textContent
//         const getEl = el.lastElementChild.childElementCount
//         console.log(`Category: ${getItems},\nElement: ${getEl}`)
//     })
// }

// categoriesTotal(itemEl)
