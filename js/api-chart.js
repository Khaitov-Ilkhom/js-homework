const $showBtn = document.querySelector("#show-btn")
const $closeModal = document.querySelector(".close-modal")
const $chartsModal = document.querySelector(".show-chart-modal")
const ctx = document.getElementById('myChart');

const renderApiHtml = (data = []) => {
    let times = []
    let usd = []
    data.data.forEach(item => {
        let time = new Date(item.time).toLocaleString().split(",").splice(0, 1)
        times.push(time)
        let price = Math.floor(Number(item.priceUsd))
        usd.push(price)
    })
    let newArr = times.flat(5)

    new Chart(ctx, {
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

const renderApi = async () => {
    const response = await axios("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1")
    renderApiHtml(response.data)
}

$closeModal.addEventListener("click", () => {
    $chartsModal.style.display = "none"
})
$showBtn.addEventListener("click", () => {
    $chartsModal.style.display = "flex"
})
renderApi()