const time = document.querySelector("#time")
const form = document.querySelector("form")
const res = document.querySelector("#res")

let alarm = JSON.parse(localStorage.getItem("Alarm")) || []

const addAlarm = (e) => {
    e.preventDefault()
    alarm.push({
        time: time.value,
        alarmRang: false
    })
    localStorage.setItem("Alarm", JSON.stringify(alarm))
    render(alarm)
}

const timeFormat = (t) => {
    return t.toString().padStart(2, "0")
}

let alarmChecked = setInterval(() => {
    let t = new Date()
    let alarms = `${timeFormat(t.getHours())}:${timeFormat(t.getMinutes())}`
    alarm.map(item => {
        if (item.time === alarms) {
            item.alarmRang = true
        }
        return item
    })
    localStorage.setItem("Alarm", JSON.stringify(alarm))
    render(alarm)
}, 1000)

const render = (a) => {
    while (res.firstChild) {
        res.removeChild(res.firstChild)
    }
    a.forEach(item => {
        const div = document.createElement("div")
        div.innerText = item.time
        if (item.alarmRang) {
            div.classList.add("rang")
        }
        res.appendChild(div)
    })
}

render(alarm)

form.addEventListener("submit", addAlarm)
