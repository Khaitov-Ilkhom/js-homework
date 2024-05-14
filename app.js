// // #1
// let user = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz"
// }
// let result = Object.entries(user);
// localStorage.setItem("user", JSON.stringify(result))

// // #2
// let user = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz"
// }
// localStorage.setItem("user", JSON.stringify(user))
// let newname = prompt("Enter your name")
// let newUserName = JSON.parse(localStorage.getItem("user"))
// newUserName.name = newname
// localStorage.setItem("user", JSON.stringify(newUserName))
//
// let newusername = prompt("Enter nick name")
// let newUsername = JSON.parse(localStorage.getItem("user"))
// newUsername.username = newusername
// localStorage.setItem("user", JSON.stringify(newUsername))
//
// let newemail = prompt("Enter email")
// let newUserEmail = JSON.parse(localStorage.getItem("user"))
// newUserEmail.email = newemail
// localStorage.setItem("user", JSON.stringify(newUserEmail))

// // #3
// let users = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz"
//     },
// ]
//
// function addUser() {
//     const newUser = {
//         id: users.length + 1,
//         name: prompt("Enter your name: "),
//         username: prompt("Enter your nick name: "),
//         email: prompt("Enter a email: ")
//     }
//     users = [...users, newUser]
// }
// addUser()
// localStorage.setItem("users", JSON.stringify(users))
// console.log(users)

// // #4
// let users = [
//     {
//         id: 1,
//         name: "Anna",
//         username: "Anna",
//         email: "Sincere@april.biz"
//     },
//     {
//         id: 2,
//         name: "Mark",
//         username: "Marko",
//         email: "mark@gmail.com"
//     }
// ]
//
// localStorage.setItem("user", JSON.stringify(users))
// let username = prompt("Enter remove user name")
// let removeUser = JSON.parse(localStorage.getItem("user"))
// removeUser = removeUser.filter((user) => user.name !== username)
// localStorage.setItem("user", JSON.stringify(removeUser))

// // #5
// let users = [
//     {
//         id: 1,
//         name: "Anna",
//         username: "Anna",
//         email: "Sincere@april.biz"
//     },
//     {
//         id: 2,
//         name: "Mark",
//         username: "Marko",
//         email: "mark@gmail.com"
//     }
// ]
// localStorage.setItem("user", JSON.stringify(users))
//
// const btn = document.getElementById("btn")
//
// btn.addEventListener("click", () => {
//     const isAgree = confirm("Are you sure to delete all?")
//     if (isAgree) {
//         localStorage.clear()
//     }
// })