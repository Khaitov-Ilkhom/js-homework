const $result = document.querySelector("#result")
const $closeModal = document.querySelector(".close-modal")
const $loginModal = document.querySelector(".update-modal")
const $form = document.querySelector("form")
const $title = document.querySelector("#title")
const $price = document.querySelector("#price")
const $discount = document.querySelector("#discount")

let productID

const hideWord = (text, limit) => {
    if (text.length > limit) {
        return text.slice(0, limit) + "..."
    } else {
        return "Hello World"
    }
}

const renderApiHtml = (data) => {
    const $fragment = document.createDocumentFragment()

    data.forEach(item => {
        const $div = document.createElement("div")
        $div.className = "card"
        $div.innerHTML = `
            <img src="${item.image}" />
            <div class="body">
                <p title="${item.title}" class="title">${hideWord(item.title, 16)}</p>
                <div class="price-discount">
                    <span>${item.discount} %</span>
                    <span>$${item.price}</span>     
                </div>
                <p title="${item.description}" class="description">${hideWord(item.description, 80)}</p>
                <div class="btn">
                    <button data-product-id="${item.id}" class="edit"><i class="bi bi-pencil-square"></i></button>
                    <button class="delete"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
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