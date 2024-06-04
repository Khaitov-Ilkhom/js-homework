const $form = document.querySelector("#login-form")
const $email = document.querySelector("#email")
const $password = document.querySelector("#password")

function User(email, password) {
    this.email = email
    this.password = password
}

const tostify = (message, type) => {
    return Toastify({
        className: type === "success" ? "success" : "error",
        text: message,
        duration: 3000
    })
}

const logInUser = (e) => {
    e.preventDefault()

    const user = new User($email.value, $password.value)

    fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data && data.access_token) {
                localStorage.setItem("token", data.access_token)
                tostify("Successfully logged in", "success").showToast()
                setTimeout(() => {
                    location.replace(window.location.origin + "/js-homework/index.html")
                }, 3000)
            }
        })
}

$form.addEventListener("submit", logInUser)