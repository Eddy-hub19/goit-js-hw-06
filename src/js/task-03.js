// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
        width: 550,
        height: 300,
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
        width: 550,
        height: 300,
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
        width: 550,
        height: 300,
    },
]

const galleryRef = document.querySelector(".gallery")

const getItem = images.map(({ url, alt, width, height }) => {
    return `<li><img width="${width}" height="${height}" src="${url}" alt="${alt}"></li>`
})

galleryRef.insertAdjacentHTML("afterbegin", getItem.join(""))

const styleGallery = `
display: flex;
justify-content: center;
gap: 50px;
list-style: none;
`

galleryRef.style.cssText = styleGallery
