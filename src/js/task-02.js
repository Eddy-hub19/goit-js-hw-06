// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"]

const ingredientsFunc = (ingredients) => {
    return ingredients.map((item) => {
        const makeEl = document.createElement("li")
        const listEl = document.querySelector("#ingredients")

        makeEl.textContent = item
        makeEl.classList = "item"

        console.log(makeEl)

        return listEl.appendChild(makeEl)
    })
}

ingredientsFunc(ingredients)
