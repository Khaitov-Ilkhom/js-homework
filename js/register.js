const $form = document.querySelector("#register-form")
const $name = document.querySelector("#name")
const $email = document.querySelector("#email")
const $password = document.querySelector("#password")
const $avatar = document.querySelector("#avatar")

function User(name, email, password, avatar) {
    this.name = name
    this.email = email
    this.password = password
    this.avatar = avatar
}

const tostify = (message, type) => {
    return Toastify({
        className: type === "success" ? "success" : "error",
        text: message,
        duration: 3000
    })
}

const registerUser = (e) => {
    e.preventDefault()
    const newUser = new User($name.value, $email.value, $password.value, $avatar.value)

    fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                tostify("Successfully registered", "success").showToast()
                setTimeout(() => {
                    location.replace(window.location.origin + "/js-homework/pages/login.html")
                }, 3000)
            }

        })
}

$form.addEventListener("submit", registerUser)