// // #1
// let str = "Hi!"
// function remove (string) {
//     let a = string.indexOf('!')
//     let newStr = string.substring(0, a)
//     return newStr
// }
// let removeElement = remove(str)
// console.log(removeElement)

// // #2
// let a = [1, 2, 5]
// let b = [3, 5, 7]
// function cubeDiversity (a, b) {
//     let cubeOne = 1;
//     let cubeTwo = 1;
//     for (let i = 0; i < a.length; i++) {
//         cubeOne *= a[i]
//     }
//     for (let k = 0; k < b.length; k++) {
//         cubeTwo *= b[k]
//     }
//     if (cubeOne > cubeTwo) {
//         return cubeOne - cubeTwo;
//     } else {
//         return cubeTwo - cubeOne
//     }
// }
// let diversity = cubeDiversity(a, b)
// console.log(diversity)

// // #3
// let number = 14
// function makeNegative(num) {
// if (num > 0) {
//     return num * -1
// } else {
//     return num
// }
// }
// let negativeNum = makeNegative(number)
// console.log(negativeNum)

// // #4
// let arr = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick', 'flick', 'chocolate', 'adventure', 'sunshine']
// function flickSwitch(arr){
//     let boolen = true
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "flick") {
//             if (boolen == true) {
//                 boolen = false
//             } else {
//                 boolen = true
//             }
//         }
//         newArr.push(boolen)
//     }
//     return newArr
// }
// let trueFalse = flickSwitch(arr)
// console.log(trueFalse)

// // #5
// let price = 1150
// function excludingVatPrice(price){
//     return Math.round(price / 1.15);
// }
// let vat = excludingVatPrice(price)
// console.log(vat)

// // #6
// let str = 'eloquent'
// function removeChar(str){
//     let newStr = str.substring(1, str.length - 1)
//     return newStr
// };
// let removeStr = removeChar(str)
// console.log(removeStr)

// // #7
// let str = "Hello"
// let letter = "l"
// function strCount(str, letter){
//     let element = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             element += 1
//         }
//     }
//     return element
// }
// let countLetter = strCount(str, letter)
// console.log(countLetter)

// // #8
// let letter = 'z';
// function position(letter){
// let alphabet = "abcdefghijklmnopqrstuvwxyz"
// let index = alphabet.indexOf(letter)
// return  `Position of alphabet: ${index + 1}`
// }
// let index = position(letter)
// console.log(index)

// // #9
// let characterCode = 65
// function getChar(str){
//     return character = String.fromCharCode(str);
// }
// let characters = getChar(characterCode)
// console.log(characters)

// // #10
// let str = "you will win"
// function addLength(str) {
//     let newStr = str.split(" ")
//     let arr = []
//     for (let i = 0; i < newStr.length; i++) {
//         arr.push(newStr[i] + ' ' + newStr[i].length)
//     }
//     return arr
// }
// let arrayCountIndex = addLength(str)
// console.log(arrayCountIndex)

// // #11
// let str = "Hello there thanks for trying my Kata"
// function addLength(str) {
//     let newStr = str.split(" ")
//     let arr = ''
//     for (let i = 0; i < newStr.length; i++) {
//         let firstLetter = newStr[i].substring(0, 1)
//         let bodyLetter = newStr[i].substring(1, newStr[i].length)
//         arr += `${firstLetter.toUpperCase()}${bodyLetter}`
//     }
//     if (str !== "") {
//         return `#${arr}`
//     } else {
//         return false
//     }
// }
// let arrayCountIndex = addLength(str)
// console.log(arrayCountIndex)

// // #12
// let str = "Pig latin is cool"
// function addLength(str) {
//     let newStr = str.split(" ")
//     let arr = []
//     for (let i = 0; i < newStr.length; i++) {
//         let firstLetter = newStr[i].substring(0, 1)
//         let bodyLetter = newStr[i].substring(1, newStr[i].length)
//         arr.push(bodyLetter + firstLetter + 'ay')
//     }
//     return arr.join(" ").toString()
// }
// let arrayCountIndex = addLength(str)
// console.log(arrayCountIndex)