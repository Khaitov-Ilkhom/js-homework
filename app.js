// // #1
// let arr = [1,5,3,4,6,2,8,7,0]
// function sortDescending(num) {
//     return num.sort((a, b) => a - b)
// }
// let reverse = sortDescending(arr).reverse()
// console.log(reverse)

// // #2
// let arr = [1,4,2,1,3,4,5,6,5,8]
// function removeDublicate (num) {
//     return [...new Set(num)]
// }
// let newArr = removeDublicate(arr)
// console.log(newArr.sort())

// // #3
// let firstName = prompt("Enter your name")
// let number = +prompt('Enter a number: 1 and 0')
// function sayHelloBye (firstName, num) {
//     let name = firstName.substring(0, 1)
//     let newName = name + firstName.substring(1, firstName.length)
//     console.log(newName)
//     if (num === 1) {
//         console.log('Hello ' + newName)
//     } else {
//         console.log("Bye " + newName)
//     }
// }
// sayHelloBye(firstName, number)

// // #4
// let number = 1221;
// function symmetrical (num) {
//     let str = num.toString()
//     let revers = str.split('').reverse().join('')
//
//     if (str == revers) {
//         return true
//     } else {
//         return false
//     }
// }
// let symmetricsNumber = symmetrical(number)
// console.log(symmetricsNumber)

// // #5
// let friends = ["Ali", "Vali", "Jonibek", "Axror"]
// function secretName (friends) {
//     let names = []
//     for (let i = 0; i < friends.length; i++) {
//         names += friends[i].substring(0, 1)
//     }
//     return names.split('')
// }
//
// let secretNames = secretName(friends)
// console.log(secretNames.sort())

// // #6
// let arr = [1,2,3,5,7,8,4,6]
// function counts (array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         count += array[i]
//     }
//     console.log(count)
// }
//
// let amount = counts(arr)
// console.log(amount)

// // #7
// let arr = [1,2,3,5,7,8,4,6]
// let number = 4
// function counts (array, num) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (i == num) {
//             break
//         }
//         count += array[i]
//     }
//     console.log(count)
// }
// let amount = counts(arr, number)
// console.log(amount)

// // #8
// let str = "adfelcbgrd"
// function sortEvenOdd (str) {
//     let strEven = ' '
//     let strOdd = ' '
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             strEven += str[i]
//         } else {
//             strOdd += str[i]
//         }
//     }
//     return ' Juft indexli harflar: ' + strEven + '\n Toq indexli harflar: ' + strOdd
// }
// let sortedStr = sortEvenOdd(str)
// console.log(sortedStr)

// // #9
// let arr = ["bek", "ali", "g'ayrat", "doston", "sohib"]
// function chartUsers (array) {
//     if (array.length == 0) {
//         return "no one online"
//     }
//     if (array.length == 1) {
//         return array[0] + "online"
//     }
//     if (array.length == 2) {
//         return array[0] + " and " + array[1] + " online"
//     }
//     if (array.length > 2) {
//         return array[0] + " , " + array[1] + " and " + (array.length - 2) + " more online"
//     }
// }
// let chartOnlineUsers = chartUsers(arr)
// console.log(chartOnlineUsers)

// // #10
// let arr = [1,[5],3,[4],6,[2],8,[7],0]
// function sortDescending(num) {
//     return num.sort()
// }
// let sortedArr = sortDescending(arr)
// console.log(sortedArr)

// // #12
// let str = "Hello"
// let letter = 'l'
// function countLatters (str, latter) {
//     let character = 0
//     for (let i =0; i < str.length; i++) {
//         if (str[i] == latter) {
//             character += 1
//         }
//     }
//     return character
// }
// let sameLetters = countLatters(str, letter)
// console.log(sameLetters)

// // #13
// let str = "123465436"
// function changeNumber (str) {
//     return Number(str)
// }
// let number = changeNumber(str)
// console.log(number)

// // #14
// let arr = [true, true, true, false, true, true, true, true ,
//     true, false, true, false, true, false, false, true ,
//     true, true, true, true, false, false, true, true]
// function countNumbers (arr) {
//     let tru = 0
//     let fols = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == true) {
//             tru += 1
//         }
//         if (arr[i] == false) {
//             fols += 1
//         }
//     }
//     return tru + " and " + fols
// }
// let count = countNumbers(arr)
// console.log(count)

// // #15
// let number = 20
// function numbers (num) {
//     let nums = []
//     for (let i = 1; i <= num; i++) {
//         nums.push(i)
//     }
//     return nums
// }
// let arr = numbers(number)
// console.log(arr)




