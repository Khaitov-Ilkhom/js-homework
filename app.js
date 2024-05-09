// // 1
// let str = 'abcd';
// let arr = [0,3,1,2];
// function scramble(str, arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr[arr[i]] = str[i]
//     }
//     return newArr.join('')
// }
// let scrambl = scramble(str, arr)
// console.log(scrambl)

// // 2
// let nums = [5, 0, 3];
// let str = "The quick brown fox jumps over the lazy dog";
// function missingWord(nums, str) {
//     let letters = ''
//     let num = nums.sort((a, b) => a - b)
//     str = str.replaceAll(" ", "")
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > str.length) {
//             return "No mission today"
//         }
//         letters += str.charAt(num[i])
//     }
//     return letters.toLowerCase()
// }
// let word = missingWord(nums, str)
// console.log(word)

// // 3
// let arr = ["1.1","2.2","3.3"]
// function toNumberArray(stringarray){
//     let arr = []
//     for (let i = 0; i < stringarray.length; i++) {
//         arr.push(+stringarray[i])
//     }
//     return arr
// }
// let newArr = toNumberArray(arr)
// console.log(newArr)

// // 4
// let text = 'abs'
// function scrollingText(text){
//     let arr = []
//     for (let i = 0; i < text.length; i++) {
//         arr.push((text.slice(i) + text.slice(0, i)).toUpperCase())
//     }
//     return arr
// }
// let arr = scrollingText(text)
// console.log(arr)

// // 5
// let arr = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
// function twoSort(s) {
//     let sorted = s.sort()
//     return sorted[0].split('').join('***')
// }
// let str = twoSort(arr)
// console.log(str)

// // 6
// let str = "I love arrays they are my favorite"
// function stringToArray(string){
//     return string.split(' ')
// }
// let arr = stringToArray(str)
// console.log(arr)

// // 7
// let str = '1,2,3,4,5'
// function array(string) {
//     let arr = string.split(',')
//     if (arr == '' || arr.length < 3) return null
//     return arr.slice(1, -1).join(' ')
// }
// let arr = array(str)
// console.log(arr)

// // 8
// let arr = [66, 123, 342]
// let num = 66
// function check(a, x) {
//     return a.includes(x)
// }
// let trueFalse = check(arr, num)
// console.log(trueFalse)

// // 9
// let arr1 = ['Germany', 'Ukraine'];
// let arr2 = [2, 0]
// function uefaEuro2016(teams, scores){
//     let a = scores[0]
//     let b = scores[1]
//     if (a > b) {
//         return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//     }
//     if (a < b) {
//         return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
//     }
//     if (a = b) {
//         return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//     }
// }
// let win = uefaEuro2016(arr1, arr2)
// console.log(win)

// // 10
// let arr = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
// function isVow(array){
//      let arr = []
//     let character = ["a", "e", "i", "o", "u"]
//     for (let i = 0; i < array.length; i++) {
//         let harp = String.fromCharCode(array[i])
//         if (character.includes(harp)) {
//             arr.push(harp)
//         } else {
//           arr.push(array[i])
//         }
//     }
//     return arr
// }
// let newArr = isVow(arr)
// console.log(newArr)

// // 11
// let arr = [70,85,83,32,82,79,72,32,68,65,72]
// function arrowFunc (arr) {
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         str += String.fromCharCode(arr[i])
//     }
//     return str
// }
// let newArr = arrowFunc(arr)
// console.log(newArr)

// // 12
// let str = "hello"
// function encode(string) {
//     let arr = string.split('')
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 'a') {
//             str += 1
//             continue
//         }
//         if (arr[i] == 'e') {
//             str += 2
//             continue
//         }
//         if (arr[i] == 'i') {
//             str += 3
//             continue
//         }
//         if (arr[i] == 'o') {
//             str += 4
//             continue
//         }
//         if (arr[i] == 'u') {
//             str += 5
//             continue
//         }
//         str += arr[i]
//     }
//     return str
// }
// function decode(string) {
//     let arr = string.split('')
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == '1') {
//             str += 'a'
//             continue
//         }
//         if (arr[i] == '2') {
//             str += 'e'
//             continue
//         }
//         if (arr[i] == '3') {
//             str += 'i'
//             continue
//         }
//         if (arr[i] == '4') {
//             str += 'o'
//             continue
//         }
//         if (arr[i] == '5') {
//             str += 'o'
//             continue
//         }
//         str += arr[i]
//     }
//     return str
// }
// let newStr = encode(str)
// let newStr2 = decode(newStr)
// console.log(newStr, newStr2)

// // 13
// let arr = [1, 3, 4, 6]
// function twosDifference(nums){
//     nums.sort((a, b) => a - b);
//
//     let result = [];
//
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.includes(nums[i] + 2)) {
//             result.push([nums[i], nums[i] + 2]);
//         }
//     }
//     return result;
// }
// let newArr = twosDifference(arr)
// console.log(newArr)