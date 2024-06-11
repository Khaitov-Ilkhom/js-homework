export const renderData = (data) => {
    const $fragment = document.createDocumentFragment()
    data.forEach(item => {
        const $div = document.createElement("div")
        $div.className = "card"
        $div.innerHTML = `
            <div class="poster"><img src="${item.image.medium}" alt=""></div>
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
            </div>
        `
        $fragment.appendChild($div)
    })
    $result.appendChild($fragment)
}