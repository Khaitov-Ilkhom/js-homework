// change currency
const form = document.querySelector("#form")
const input = document.querySelector("#currency")
const selectFrom = document.querySelector("#from")
const selectTo = document.querySelector("#to")
const div = document.querySelector("#res")
// update currency
const formChangeCurrency = document.querySelector("#change-currency")
const selectCurrency = document.querySelector("#select-currency")
const usd = document.querySelector("#usd")
const uzs = document.querySelector("#uzs")
const rub = document.querySelector("#rub")
const eur = document.querySelector("#eur")
const res = document.querySelector("#result")
// currency object
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
// set localstorage
localStorage.setItem("Rates", JSON.stringify(currency))
const rates = JSON.parse(localStorage.getItem("Rates"))
// change currency
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
// update currency value
function updateCurrency (e) {
    e.preventDefault()

    let usdValue = +usd
    let uzsValue = +uzs
    let rubValue = +rub
    let eurValue = +eur

    rates[selectCurrency]["USD"] = usdValue
    rates[selectCurrency]["UZS"] = uzsValue
    rates[selectCurrency]["EUR"] = eurValue
    rates[selectCurrency]["RUB"] = rubValue

    localStorage.setItem("Rates", JSON.stringify(rates))
}
// event forms and inputs
form.addEventListener("submit", changeCurrency)
formChangeCurrency.addEventListener("submit", updateCurrency)
input.addEventListener("input" , () => {
        input.value = input.value.replace(/-/g, "")})
usd.addEventListener("input" , () => {
    usd.value = usd.value.replace(/-/g, "")})
rub.addEventListener("input" , () => {
    rub.value = rub.value.replace(/-/g, "")})
uzs.addEventListener("input" , () => {
    uzs.value = uzs.value.replace(/-/g, "")})
eur.addEventListener("input" , () => {
    eur.value = eur.value.replace(/-/g, "")})