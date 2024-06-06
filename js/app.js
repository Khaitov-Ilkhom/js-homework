const $selectCountry = document.querySelector("#select-country")
const $form = document.querySelector("#form")
const $inputDate = document.querySelector("#holiday-date")
const $holidayInfo = document.querySelector("#holiday-info")
const $table = document.querySelector("#selected-country")
const $borderCountry = document.querySelector("#border-country")

let selectCountryCode

const renderSelectCountry = (data) => {
    const $fragment = document.createDocumentFragment()
    data.forEach(country => {
        const $option = document.createElement("option")
        $option.value = country.countryCode
        $option.innerText = country.name

        $fragment.appendChild($option)
    })

    $selectCountry.appendChild($fragment)
}

const renderFetch = () => {
    fetch("https://date.nager.at/api/v3/AvailableCountries")
        .then(res => res.json())
        .then(data => renderSelectCountry(data))
}

const renderCountryInfo = (data) => {
    while ($table.firstChild) {
        $table.removeChild($table.firstChild)
    }
    const $firstThead = document.createElement("tr")
    $firstThead.innerHTML = `
         <th>Selected Country Name</th>
         <th>Selected Country Official Name</th>
         <th>Selected Country Code</th>
         <th>Selected Region</th>         
    `
    $table.appendChild($firstThead)

    const $tr = document.createElement("tr")
    $tr.innerHTML = `
        <td>${data.commonName}</td>
        <td>${data.officialName}</td>
        <td>${data.countryCode}</td>
        <td>${data.region}</td>
    `
    $table.appendChild($tr)

    while ($borderCountry.firstChild) {
        $borderCountry.removeChild($borderCountry.firstChild)
    }
    const $trThead = document.createElement("tr")
    $trThead.innerHTML = `
        <th>Borders Country Name</th>
        <th>Borders Country Official Name</th>
        <th>Borders Country Code</th>
        <th>Borders Region</th>
    `
    $borderCountry.appendChild($trThead)

    data.borders.forEach(item => {
        const $tr = document.createElement("tr")
        $tr.innerHTML = `
              <td>${item.commonName}</td>
              <td>${item.officialName}</td>
              <td>${item.countryCode}</td>
              <td>${item.region}</td>
         `
        $borderCountry.appendChild($tr)
    })
}

const renderCountryHolidayDate = (data) => {
    while ($holidayInfo.firstChild) {
        $holidayInfo.removeChild($holidayInfo.firstChild)
    }
    const $thead = document.createElement("tr")
    $thead.innerHTML = `
        <th>Holiday Date</th>
        <th>Holiday Local Name</th>
        <th>Holiday Name</th>
        <th>Country Code</th>
    `
    $holidayInfo.appendChild($thead)
    const $fragment = document.createDocumentFragment()
    data.forEach(item => {
        const $tr = document.createElement("tr")
        $tr.innerHTML = `
            <td>${item.date}</td>
            <td>${item.localName}</td>
            <td>${item.name}</td>
            <td>${item.countryCode}</td>
        `
        $fragment.appendChild($tr)
    })
    $holidayInfo.appendChild($fragment)
}

const renderCountryInfoApi = (countryCode) => {
    selectCountryCode = countryCode
    fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
        .then(res => res.json())
        .then(data => renderCountryInfo(data))
}

renderFetch()
$selectCountry.addEventListener("change", (e) => {
    e.preventDefault()
    renderCountryInfoApi(e.target.value)
})

const renderCountryHolidayApi = (date, code) => {
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${date}/${code}`)
        .then(res => res.json())
        .then(data => renderCountryHolidayDate(data))
}

$form.addEventListener("submit", (e) => {
    e.preventDefault()
    renderCountryHolidayApi($inputDate.value, selectCountryCode)
})