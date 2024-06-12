export const renderData = (data) => {
    const $fragment = document.createDocumentFragment()
    data.forEach(item => {
        const $div = document.createElement("div")
        $div.className = "card"
        $div.innerHTML = `
            <div class="poster"><img src="${item.image.original}" alt=""></div>
            <div class="details">
                <h2>${item.name} <span>${item.language}</span></h2>
                <h3>${item.premiered} • ${item.schedule.days[0]} • ${item.schedule.time} • ${item.averageRuntime}min</h3>
                <div class="rating">
                    <span>${item.rating.average}/10</span> <a href="${item.url}">You will find us here  <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="tags">
                    <b>Genres:</b> <span>${item.genres[0] ? item.genres[0] : ""}</span><span>${item.genres[1] ? " | " + item.genres[1] : ""}</span><span>${item.genres[2] ? " | " + item.genres[2] : ""}</span>
                </div>
                <div class="desc">
                    ${item.summary}
                </div>
                <a class="btn" target="_blank" href="./page.html?id=${item.id}">Show more</a>
            </div>
        `
        $fragment.appendChild($div)
    })
    $result.appendChild($fragment)
}

export const renderPageInfo = (data) => {
    $box.innerHTML = `
        <div class="img-box">
            <img src="${data.image.original}" alt="">
        </div>
        <div class="info-box">
            <h2>${data.name}</h2>  
            <a href="${data.url}">Official Site <i class="bi bi-arrow-right"></i></a>
            <h3>${data.premiered} • ${data.schedule.days[0]} • ${data.schedule.time} • ${data.averageRuntime}min</h3>
            <span class="rating"><b>Rating:</b> ${data.rating.average}/10</span>
            <br>
            <p class="genres"><b>Genres:</b> <span>${data.genres[0] ? data.genres[0] : ""}</span><span>${data.genres[1] ? " | " + data.genres[1] : ""}</span><span>${data.genres[2] ? " | " + data.genres[2] : ""}</span></p>
            <p>${data.summary}</p>
        </div>
    `
}