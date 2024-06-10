const $showTable = document.querySelector("#show-table")
const $table = document.querySelector("#table")
const $tbody = document.querySelector("#tbody")
const $close = document.querySelector(".close")
const $chartModal = document.querySelector(".show-chart")
const $ctx = document.getElementById('myCharts');

const renderApiInfo = (data) => {
    const $fragment = document.createDocumentFragment()
    for (let i = 0; i < 10; i++) {
        const $tr = document.createElement("tr")
        $tr.innerHTML = `
            <td>${data[i].rank}</td>
            <td class="name" data-coin-name="${data[i].id}">${data[i].symbol}</td>
            <td>${data[i].name}</td>
            <td>$${data[i].priceUsd}</td>
            <td><a class="link" href="${data[i].explorer}" target="_blank"><i class="bi bi-globe2"></i></a></td>
        `
        $fragment.appendChild($tr)
    }
    $tbody.appendChild($fragment)
}

const renderChart = (data) => {
    let times = []
    let usd = []
    data.data.forEach(item => {
        let time = new Date(item.time).toLocaleString().split(",").splice(0, 1)
        times.push(time)
        let price = Math.floor(Number(item.priceUsd))
        usd.push(price)
    })
    let newArr = times.flat(5)

    new Chart($ctx, {
        type: 'line',
        data: {
            labels: newArr,
            datasets: [{
                label: '# of Votes',
                data: usd,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const showChart = (e) => {
    if (e.target.classList.contains("name")) {
        let coinName = e.target.getAttribute("data-coin-name")
        fetch(`https://api.coincap.io/v2/assets/${coinName}/history?interval=d1`)
            .then(res => res.json())
            .then(data => renderChart(data))
    }
    $chartModal.style.display = "flex"
}

const renderApiCoins = async () => {
    const response = await axios("https://api.coincap.io/v2/assets")
    renderApiInfo(response.data.data)
}

renderApiCoins()

$showTable.addEventListener("click", () => {
    $table.style.display = "flex"
})
$close.addEventListener("click", () => {
    $chartModal.style.display = "none"
})
$tbody.addEventListener("click", showChart)