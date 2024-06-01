const box = document.querySelector("#box")

// const renderData = (d) => {
//     d.forEach(item => {
//         const div = document.createElement("div")
//         div.innerHTML = `
//             <p>ID ${item.id}</p>
//             <p>Title ${item.title}</p>
//             <img class="img" src="${item.images[0]}" alt="">
//             <p>Des ${item.description}</p>
//         `
//         box.appendChild(div)
//     })
// }
//
//
// fetch("https://api.escuelajs.co/api/v1/products")
//     .then(response => response.json())
//     .then(data => renderData(data))


const ren = (d) => {
    d.data.forEach(item => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
            <div class="flex items-center justify-center flex-col">
                <img class="img" src="${item.avatar}" alt="">
                <div class="title">
                    <p>${item.last_name}</p>
                    <p>${item.first_name}</p>
                </div>
                <p class="text-white">${item.email}</p>
            </div>
        `
        box.appendChild(div)
    })
}


fetch("https://reqres.in/api/users?page=2")
    .then(res => res.json())
    .then(d => ren(d))