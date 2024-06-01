const box = document.querySelector("#box")

const ren = (d) => {
    d.forEach(item => {

    })
    for (let i = 0; i < 32; i++) {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
            <div class="flex items-center justify-center flex-col">
                <img class="img" src="${d[i].category.image}">
                <div class="title">
                    <b>${d[i].title}</b>
                    <b>$${d[i].price}</b>
                </div>
                <p>${d[i].description}</p>
            </div>
        `
        box.appendChild(div)
    }
}


fetch("https://api.escuelajs.co/api/v1/products")
    .then(res => res.json())
    .then(d => ren(d))