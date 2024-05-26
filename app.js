const btn = document.querySelector(".btn-icon");
const sidebar = document.querySelector(".sidebar-box");
const menuItems = document.querySelectorAll(".menu-item")

btn.addEventListener("click", () => {
    sidebar.classList.toggle("shrink")
    btn.classList.toggle("menu-show")
})

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(item => {
            item.style.borderLeft = "4px solid transparent"
            item.style.color = "#ffffff80"
        })
        item.style.borderLeft = "4px solid #fff"
        item.style.color = "#fff"
    })
})