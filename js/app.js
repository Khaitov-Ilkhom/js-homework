const $result = document.querySelector("#result")
const $closeModal = document.querySelector(".close-modal")
const $loginModal = document.querySelector(".update-modal")
const $form = document.querySelector("form")
const $title = document.querySelector("#title")
const $price = document.querySelector("#price")
const $discount = document.querySelector("#discount")

let productID

const renderApiHtml = (data) => {
    console.log(data)
    const $fragment = document.createDocumentFragment()

    data.forEach(item => {
        const $div = document.createElement("div")
        $div.className = "card"
        $div.innerHTML = `
            <img src="${item.image}" />
            <p>${item.title}</p>
            <span>${item.discount}</span>
            <span>${item.price}</span>
            <p>${item.description}</p>
            <button data-product-id="${item.id}" class="edit">Edit</button>
        `
        $fragment.appendChild($div)
    })
    $result.appendChild($fragment)

}

const showEditBtn = (e) => {
    if (e.target.classList.contains("edit")) {
        $loginModal.style.display = "flex"
        productID = e.target.getAttribute("data-product-id")
    }
}
$closeModal.addEventListener("click", () => {
    $loginModal.style.display = "none"
})

const renderApi = () => {
    fetch("https://6662ac4162966e20ef097175.mockapi.io/api/products/products")
        .then(res => res.json())
        .then(data => renderApiHtml(data))
}

const inputValue = (e) => {
    e.preventDefault()

    fetch(`https://6662ac4162966e20ef097175.mockapi.io/api/products/products/${productID}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: $title.value,
            price: $price.value,
            discount: $discount.value,
        })
    })
        .then(res => res.json())
        .then(data => renderApi())
        .catch(err => console.log(err,'ERRRRR'))

    $loginModal.style.display = "none"
    $form.reset()
    setTimeout(() => {
        window.location.reload()
    }, 1000)
}

$result.addEventListener("click", showEditBtn)



renderApi()
$form.addEventListener("submit", inputValue)