const form = document.querySelector("form")
const input = document.querySelector("#currency")
const selectFrom = document.querySelector("#from")
const selectTo = document.querySelector("#to")
const div = document.querySelector("#res")

let currency = {
    USD: {
        USD: 1,
        UZS: 12705,
        EUR: 0.92,
        RUB: 88.58
    },
    UZS: {
        UZS: 1,
        USD: 0.0005,
        EUR: 0.0008,
        RUB: 0.011
    },
    EUR: {
        EUR: 1,
        USD: 1.08,
        UZS: 13787,
        RUB: 96
    },
    RUB: {
        RUB: 1,
        USD: 88.58,
        UZS: 143,
        EUR: 0.010
    }
}

localStorage.setItem("Rates", JSON.stringify(currency))
const rates = JSON.parse(localStorage.getItem("Rates"))
function changeCurrency (e) {
    e.preventDefault()

    let amount = +input.value
    let fromCurrency = selectFrom.value
    let toCurrency = selectTo.value

    let convertAmount = (amount / currency[fromCurrency][fromCurrency]) * currency[fromCurrency][toCurrency]

    div.innerHTML = `
        <p>${amount} ${fromCurrency} = ${convertAmount} ${toCurrency}</p>
        <p>Buy ${rates[fromCurrency][toCurrency] - rates[fromCurrency][toCurrency] * 0.05} ${toCurrency}</p>
        <p>Sell ${rates[fromCurrency][toCurrency] + rates[fromCurrency][toCurrency] * 0.05} ${toCurrency}</p>

    `
    form.reset()
}

form.addEventListener("submit", changeCurrency)