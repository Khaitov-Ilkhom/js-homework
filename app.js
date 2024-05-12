// // #1
// let n = [1,3,4,5,7,8,0,2,13,15,17,24,27]
// let arr = []
// for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 !== 0) {
//         arr.push(n[i])
//     }
// }
// console.log(arr)

// // #2
// let array = [1, 'Hi', 3, 'Hello', 5, 'Salom', 6, 7, 9, 'Three', 2]
// array = array.filter((word) => word.length > 1)
// console.log(array)

// // #3
// let a = [1,3,4,5,6,8,9,12,14,25]
// let b = [2,5,7,9,19,4,6,4,1]
// function findForEquals (a, b) {
//     a = a.sort((a, b) => a - b)
//     b = b.sort((a, b) => a - b)
//     let arr = []
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == b[i]) {
//             arr.push(b[i])
//         }
//     }
//     return arr
// }
// let array = findForEquals(a, b)
// console.log(array)

// // #4
// let a = 5
// let arr = []
// for (let i = 0; i < a; i++) {
//     arr.push(+prompt("Enter a number"))
// }
// console.log(arr)

// // #5
// let a = +prompt("Enter a number length array: ")
// let arr = []
// for (let i = 0; i < a; i++) {
//     arr.push(+prompt("Enter a number: "))
// }
// console.log(arr.reduce((sum, item) => sum + item, 0))

// #6
// let a = 7
// let arr = []
// for (let i = 0; i < a; i++) {
//     arr.push(i)
// }
// function oddEven (arr) {
//     let oddEven = []
//     let prom = prompt("Enter a Even or Odd").toLowerCase()
//     for (let k = 0; k < arr.length; k++) {
//         if (prom === 'even' && arr[k] % 2 === 0) {
//             oddEven.push(arr[k])
//         }
//         else if (prom === 'odd' && arr[k] % 2 !== 0) {
//             oddEven.push(arr[k])
//         }
//     }
//     return oddEven
// }
// let arrayOddEven = oddEven(arr)
// console.log(arrayOddEven)

// // #7
// let a = 5
// let arr = []
// for (let i = 0; i < a; i++) {
//     arr.push(i)
// }
// console.log(arr.slice(-1))

// // #8
// let a = [2,3,4,6,8,7,3,1,5,6,8,9]
// a = a.find((a) => a > 4)
// console.log(a)