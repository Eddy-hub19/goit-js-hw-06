// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"]
const listRef = document.querySelector("#ingredients")

const listIngredientsRef = ingredients.map((item) => {
    const makeEl = document.createElement("li")
    makeEl.textContent = item
    makeEl.classList = "item"

    return makeEl
})

listRef.append(...listIngredientsRef)
