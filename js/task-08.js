// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// -------------------With FormData----------------------------- //

// const loginForm = document.querySelector(".login-form")

// loginForm.addEventListener("submit", onFormSubmit)

// function onFormSubmit(event) {
//     event.preventDefault()

//     const formData = new FormData(event.currentTarget)

//     formData.forEach((name, value) => {
//         console.log(name,value);
//         if (name === "" || value === "") {
//             return alert("Заповніть всі поля!")
//         } else {
//             event.currentTarget.reset()
//         }
//     })
// }

const formRef = document.querySelector(".login-form")

formRef.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements

    if (email.value === "" || password.value === "") {
        return alert("Заповніть всі поля!!")
    }

    const userData = {
        email: email.value,
        password: password.value,
    }
    console.log(userData)
    event.currentTarget.reset()
}
