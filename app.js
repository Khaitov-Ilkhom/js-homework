
let toDoList = [

]

function setLocoalStorage () {
    localStorage.setItem("Todo", JSON.stringify(toDoList))
}

function addTodo () {
    const newProduct = {
        id: (Math.floor(Math.random() * 100) + 1).toString().padStart(2, "0"),
        todo: prompt("What do you want todo: "),
        time: new Date().toLocaleTimeString(),
        timeAll: Date.parse("1970")
    }
    console.log(newProduct.timeAll)
    toDoList.push(newProduct)
    setLocoalStorage()
    drawTable(JSON.parse(localStorage.getItem("Todo")))
}
const addBtn = document.querySelector("#add-btn")
addBtn.addEventListener("click", addTodo)

function removeProduct () {
    const productID = prompt("Enter todo id: ")

    toDoList = toDoList.filter((product) => product.id !== productID)

    setLocoalStorage()
}
const removeBtn = document.querySelector("#remove-btn")
removeBtn.addEventListener("click", removeProduct)

function refreshTodo () {
    drawTable(JSON.parse(localStorage.getItem("Todo")))
}

const refreshBtn = document.querySelector("#refresh-btn")
refreshBtn.addEventListener("click", refreshTodo)

// function sortedTodo () {
//     if ()
// }

const sortedBtn = document.querySelector("#sort-btn")
sortedBtn.addEventListener("click", sortedTodo)

function drawTable (toDoList) {
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const thName = document.createElement("th")
    thName.innerText = "Todo"
    const thTime = document.createElement("th")
    thTime.innerText = "Time"
    const thId = document.createElement("th")
    thId.innerText = "ID"

    tr.append(thName, thTime, thId)
    thead.appendChild(tr)
    table.appendChild(thead)
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)

    for (let member of toDoList) {
        const tr = document.createElement("tr")
        const tdName = document.createElement("td")
        tdName.innerText = member.todo
        tr.appendChild(tdName)
        tbody.appendChild(tr)

        const tdTime = document.createElement("td")
        tdTime.innerText = member.time
        tr.appendChild(tdTime)
        tbody.appendChild(tr)

        const tdId = document.createElement("td")
        tdId.innerText = member.id
        tr.appendChild((tdId))
        tbody.appendChild(tr)
    }
    result.innerText = ""
    result.appendChild(table)
}
