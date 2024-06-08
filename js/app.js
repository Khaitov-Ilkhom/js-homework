const $result = document.querySelector("#result")
const $closeModal = document.querySelector(".close-modal")
const $updateModal = document.querySelector(".update-modal")
const $form = document.querySelector("#update-form")
const $title = document.querySelector("#title")
const $price = document.querySelector("#price")
const $discount = document.querySelector("#discount")

const $adProductBtn = document.querySelector("#ad-product")
const $adProductForm = document.querySelector("#ad-form")
const $adTitle = document.querySelector("#ad-title")
const $adPrice = document.querySelector("#ad-price")
const $adDiscount = document.querySelector("#ad-discount")
const $adDescription = document.querySelector("#ad-description")
const $adImg = document.querySelector("#ad-img")
const $addingModal = document.querySelector(".adding-modal")
const $closedModal = document.querySelector(".close")


let productID

const hideWord = (text, limit) => {
    if (text.length > limit) {
        return text.slice(0, limit) + "..."
    } else {
        return text
    }
}

const renderApiHtml = (data = []) => {
    while ($result.firstChild) {
        $result.removeChild($result.firstChild)
    }
    const $fragment = document.createDocumentFragment()

    data.forEach(item => {
        const $div = document.createElement("div")
        $div.className = "card"
        $div.innerHTML = `
            <img src="${item.image}"  alt="img"/>
            <div class="body">
                <p title="${item.title}" class="title">${hideWord(item.title, 16)}</p>
                <div class="price-discount">
                    <span>${item.discount} %</span>
                    <span>$${item.price}</span>     
                </div>
                <p title="${item.description}" class="description">${hideWord(item.description, 80)}</p>
                <div class="btn">
                    <button data-product-id="${item.id}" class="edit"><i class="bi bi-pencil-square"></i></button>
                    <button data-product-id="${item.id}" class="delete"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
        `
        $fragment.appendChild($div)
    })
    $result.appendChild($fragment)

}

const showEditBtn = (e) => {
    if (e.target.classList.contains("edit")) {
        $updateModal.style.display = "flex"
        productID = e.target.getAttribute("data-product-id")
    }
}

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

    $updateModal.style.display = "none"
    $form.reset()

    renderApiHtml()
}

const editBtn = (e) => {
    if (e.target.classList.contains("delete")) {
       let deleteID = e.target.getAttribute("data-product-id")
        fetch(`https://6662ac4162966e20ef097175.mockapi.io/api/products/products/${deleteID}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => renderApi(data))
    }
    renderApiHtml()

}

const addingProducts = (e) => {
    e.preventDefault()

    const product = {
        title: $adTitle.value,
        price: $adPrice.value,
        description: $adDescription.value,
        discount: $adDiscount.value,
        image: $adImg.value,
    }

    fetch("https://6662ac4162966e20ef097175.mockapi.io/api/products/products", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .then(data => renderApi())

    renderApiHtml()
    $addingModal.style.display = "none"
}

$result.addEventListener("click", showEditBtn)
$result.addEventListener("click", editBtn)
$adProductBtn.addEventListener("click", () => {
    $addingModal.style.display = "flex"
})
$closeModal.addEventListener("click", () => {
    $updateModal.style.display = "none"
})
$closedModal.addEventListener("click", () => {
    $addingModal.style.display = "none"
})
renderApi()
$form.addEventListener("submit", inputValue)
$adProductForm.addEventListener("submit", addingProducts)