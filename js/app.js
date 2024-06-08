const $result = document.querySelector("#result")







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
        `
        $fragment.appendChild($div)
    })
    $result.appendChild($fragment)
}


const renderApi = () => {

    fetch("https://6662ac4162966e20ef097175.mockapi.io/api/products/products")
        .then(res => res.json())
        .then(data => renderApiHtml(data))
}

renderApi()