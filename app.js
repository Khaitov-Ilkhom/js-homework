// // #1
// let str = "hello";
// let spell = ''
// let spellingStr = []
//
// for (let i = 0; i < str.length; i++) {
//     spell += str[i]
//     spellingStr.push(spell)
// }
// console.log(spellingStr)

// // #2
// let str = "hello"
// let element = "l"
// let arr = []
// function indexOf (str, element) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == element) {
//             arr.push(i)
//         }
//     }
// }
// indexOf(str, element)
// console.log(arr)

// // #3
// let arr = [1,2,3,4,6,1,2,3,5,6]
// function removeDups(arr) {
//     return [...new Set(arr)]
// }
// let newArr = removeDups(arr)
// console.log(newArr)

// // #4
// let arr = [1, 2, 3, 4, 5];
// function mirror(arr) {
//     let newArr = []
//     for (let i = 0; i < (arr.length - 1); i++) {
//         newArr.push(arr[i])
//     }
//     return arr.concat(newArr.reverse())
// }
// let newArr = mirror(arr)
// console.log(newArr)

// // #5
// let number = 1485979;
// function reverseArr(num) {
//     let myArr = String(num).split("").map((num) => {
//         return Number(num)
//     })
//     return myArr.reverse()
// }
// let arr = reverseArr(number)
// console.log(arr)

// // #6
// let array = ["samuel", "MABELLE", "letitia", "meridith"];
// function capMe(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let str = ''
//         str = arr[i]
//         let head = ''
//         let body = ''
//         head = str.substring(0, 1).toUpperCase()
//         body = str.substring(1, str.length).toLowerCase()
//         newArr.push(head + body)
//     }
//     return newArr
// }
// let newArr = capMe(array)
// console.log(newArr)

// // #7
// let str = "20.3k 3.8k 7.7k 992"
// function transformUpvotes(str) {
//     let arr = str.split(' ')
//     let arrays = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes('k')) {
//             let newArr = arr[i].substring(arr[0], arr[i].length - 1)
//             arrays.push(newArr * 1000)
//         } else {
//             arrays.push(+arr[i])
//         }
//     }
//     return arrays
// }
// let newArr = transformUpvotes(str)
// console.log(newArr)

// // #8
// let arr =
//     [[1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]]
// function reverseImage(image) {
//     let newArr = []
//     for (let i = 0; i < image.length; i++) {
//         let arr = []
//         for (let k = 0; k < image[i].length; k++) {
//             if (image[i][k] == 1) {
//                 arr.push(0)
//             } else if (image[i][k] == 0) {
//                 arr.push(1)
//             }
//         }
//         newArr.push(arr)
//     }
//     return newArr
// }
// let reverseArr = reverseImage(arr)
// console.log(reverseArr)

// // #9
// let array = [1, 2, 3]
// function sumArray(arr) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result;
// }
// let count = sumArray(array)
// console.log(count)

// // // #10
// let array = ["abb", "abc", "abcdb", "aea", "bbb"]
// function filterUnique(arr) {
//     let array = []
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = arr[i].split('')
//         let removeDublicate =[... new Set(newArr)]
//         if (newArr.length === removeDublicate.length) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }
// let newArr = filterUnique(array)
// console.log(newArr)

// // #11
// let numbers = [-1, -2, -3, -4, -5, -6]
// function sumOddAndEven(arr) {
//     let even = 0;
//     let odd = 0;
//     for (let i =0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             even += arr[i]
//         }
//         if (arr[i] % 2 !== 0) {
//             odd += arr[i]
//         }
//     }
//     let count = []
//     count.push(even)
//     count.push(odd)
//     return count
// }
// let array = sumOddAndEven(numbers)
// console.log(array)

// // #12
// let arr = ["hi", "edabit", "fgh", "abc"];
// let str = "fgh"
// function findIndex(arr, str) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === str) {
//             return i
//         }
//     }
// }
// let index = findIndex(arr, str)
// console.log(index)

// // #13
// let words = "one"
// function word(s) {
//     switch (s) {
//         case "one": {
//             return 1
//         }
//         case "two": {
//             return 2
//         }
//         case "three": {
//             return 3
//         }
//         case "four": {
//             return 4
//         }
//         case "five": {
//             return 5
//         }
//         case "six": {
//             return 6
//         }
//         case "seven": {
//             return 7
//         }
//         case "eight": {
//             return 8
//         }
//         case "nine": {
//             return 9
//         }
//         case "zero": {
//             return 0
//         }
//         default: {
//             return "Not a Number"
//         }
//     }
// }
// let numbers = word(words)
// console.log(numbers)

// // #14
// let arr = ["9.4", "4.2"]
// function toNumberArray(arr) {
//     return arr.map(i=>Number(i));
// }
// let newArr = toNumberArray(arr)
// console.log(newArr)

// // #15
// let arr = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
// function points(game) {
//     let count = 0
//     for (let i = 0; i < game.length; i++) {
//         let arr =game[i].split(':')
//         if (arr[0] > arr[1]) {
//             count += 3
//         }
//         if (arr[0] < arr[1]) {
//             count += 0
//         }
//         if (arr[0] === arr[1]) {
//             count += 1
//         }
//     }
//     return count
// }
// let point = points(arr)
// console.log(point)

// // #16
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

// // #17
// let str = "123465436"
// function changeNumber (str) {
//     return Number(str)
// }
// let number = changeNumber(str)
// console.log(number)

// // #18
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

// // #19
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