const addFoodBtn = document.querySelector("#add-food-btn")
const deleteBtn = document.querySelector("#delete-food")
const showBtn = document.querySelector("#show-btn");
const searchFoodBtn = document.querySelector("#search-food-btn")
const sortBtn = document.querySelector("#sort-btn")
const filterBtn = document.querySelector("#filter-food")

const result = document.querySelector("#result");
const searchFoods = document.querySelector("#search-food")

// CREATE FOOD
function NewFood(nfn, fp, t) {
    this.id = (Math.floor(Math.random() * 1000) + 1).toString().padStart(4, "0")
    this.name = nfn
    this.price = +fp
    this.time = t
}

// GET LOCALSTORAGE
const Food_Menu = JSON.parse(localStorage.getItem("Foods")) || [];

function displayFoods(db) {
    searchFoods.innerHTML = ""
    db.forEach(item => {
        result.innerHTML += `
            <div class="search-item">
                <span>${item.id}</span>
                <h2>${item.name}</h2>
                <span>${item.price}</span>
                <span>${item.time}</span>
            </div>
        `
    })
}

// ADD FOOD
const addNewFood = function () {
    let newFoodName = prompt("Enter food name: ");
    while (newFoodName && newFoodName.trim() === "") {
        alert("Please enter food name!")
        newFoodName = prompt("Enter food name: ")
    }
    let foodPrice = prompt("Enter food price")
    while (foodPrice && foodPrice.trim() === "") {
        alert("Please enter food price!")
        foodPrice = prompt("Enter food price")
    }
    let date = new Date()
    let time = date.toLocaleTimeString();

    let newFoodResult = new NewFood(newFoodName, foodPrice, time);

    Food_Menu.push(newFoodResult);
    localStorage.setItem("Foods", JSON.stringify(Food_Menu));

}
addFoodBtn.addEventListener("click", addNewFood)

// DELETE FOOD
const deleteFood = function(){
    let deleteId = prompt("Enter todo id: ");
    if(deleteId){
        let indexOfDeletedElement = Food_Menu.findIndex(element => element.id === deleteId);
        Food_Menu.splice(indexOfDeletedElement, 1);
        localStorage.setItem("foods", JSON.stringify(Food_Menu));
    }
}
deleteBtn.addEventListener("click", deleteFood)

// SHOW FOOD
const showFoods = function(){
    result.innerHTML = ""
    Food_Menu.forEach(item => {
        result.innerHTML += `
            <div class="item">
                <span>${item.id}</span>
                <h2>${item.name}</h2>
                <span>${item.price}</span>
                <span>${item.time}</span>
            </div>
        `
    })
}
showBtn.addEventListener("click", showFoods);

// SEARCH FOOD
function searchFood() {
    let foodName = prompt("Enter food name: ").toLowerCase();
    while (foodName && foodName.trim() === "") {
        alert("Please enter food name!")
        foodName = prompt("Enter food name: ").toLowerCase()
    }
    let result = Food_Menu.filter((item) => item.name.toLowerCase().includes(foodName));
    displayFoods(result)
}
searchFoodBtn.addEventListener("click", searchFood)

// SORT FOODS
let sorted = false;
const sortFood = function(){
    if(sorted === false){
        sorted = true;
        Food_Menu.sort((a, b) => {
            if(a.name > b.name){
                return -1
            }
            else{
                return 1
            }
        })
    }
    else{
        sorted = false;
        Food_Menu.sort((a, b) => {
            if(a.name > b.name){
                return 1
            }
            else{
                return -1
            }
        })
    }

    showFoods();
}
sortBtn.addEventListener("click", sortFood)

// FILTER FOOD
function filterFood () {
    let startFoodPrice = prompt("Enter the starting food price: ")
    while (startFoodPrice && startFoodPrice.trim() === "") {
        alert("Please enter food price!")
        startFoodPrice = prompt("Enter food price: ")
    }
    let fromTo = prompt("Enter from to food price")
    while (fromTo && fromTo.trim() === "") {
        alert("Please enter food price!")
        fromTo = prompt("Enter food price: ")
    }
    let filtered = Food_Menu.filter((item) => item.price > startFoodPrice && item.price < fromTo );
    displayFoods(filtered)
}
filterBtn.addEventListener("click", filterFood)