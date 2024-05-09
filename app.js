// // #1
// let num = 5
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let arr = nums(num)
// console.log(arr)

// // #2
// let num = 4
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let arr = nums(num)
// let res = arr.map((item) => 2 ** item)
// console.log(res)

// // #3
// let num = 15
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let array = nums(num)
// let res = array.reduce((sum, item) => sum + item, 0)
// console.log(res)

// // #4
// let num = 10
// function number (n) {
//     let arrOdd = []
//     let arrEven = []
//     let arr = []
//     for (let i = 0; i <= n; i++) {
//         arr.push(i + '0')
//     }
//     for (let k = 1; k <  arr.length; k++) {
//         if(k % 2 === 0) {
//             arrEven.push(+arr[k])
//         }
//         if (k % 2 !== 0) {
//             arrOdd.push(+arr[k])
//         }
//     }
//     let a = arrEven.reduce((sum, item) => sum + item, 0)
//     let b = arrOdd.reduce((sum, item) => sum + item, 0)
//     return a - b
// }
// let array = number(num)
// console.log(array)

// // #5
// let num = 5
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let arr = nums(num)
// console.log(arr.reduce((s, i) => s + i, 0))

// // #6
// let num = 10
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr.sort((a, b) => b - a)
// }
// let arr = nums(num)
// console.log(arr)

// // #7
// let users = [
//     {
//         name: "Kamol",
//         age: 22
//     },
//     {
//         name: "Ali",
//         age: 28
//     },
//     {
//         name: "Vali",
//         age: 39
//     }
// ]
// function ageDifferens (arr){
//     let ageArr = []
//     for (let i of arr) {
//         for (let key in i) {
//             ageArr.push(i['age'])
//         }
//     }
//     ageArr = [... new Set(ageArr)]
//     let differens1 = ageArr[0] - ageArr[1]
//     let differens2 = ageArr[1] - ageArr[2]
//     let differens3 = ageArr[0] - ageArr[2]
//     return `Kamol va Ali yoshlari o'rtasidagi farq ${Math.abs(differens1)}
//     Ali va Vali yoshlari o'rtasidagi farq ${Math.abs(differens2)}
//     Kamol va Vali yoshlari o'rtasidagi farq ${Math.abs(differens3)}`
// }
// let differens = ageDifferens(users)
// console.log(differens)

// // #8
// let n = 15
// function newArr (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let array = newArr(n)
// function findIndex (arr, k, l) {
//     let newArr = []
//     for (let i = k; i <= l; i++) {
//         newArr.push(i)
//     }
//     return newArr
// }
// let sumIndex = findIndex(array, 4, 11)
// console.log(sumIndex.reduce((s, i) => s + i, 0))

// // #9
// let num = 10
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         if (i % 2 == 0) {
//             arr.push(i)
//         }
//     }
//     return Math.max(...arr)
// }
// let arr = nums(num)
// console.log(arr)

// // #10
// let num = 10
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         if (i % 2 == 0 && i != 0) {
//             arr.push(i)
//         }
//     }
//     return Math.min(...arr)
// }
// let arr = nums(num)
// console.log(arr)

// // #11
// let num = 10
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         if (i % 2 != 0) {
//             arr.push(i)
//         }
//     }
//     return Math.max(...arr)
// }
// let arr = nums(num)
// console.log(arr)

// // #12
// let num = 15
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let array = nums(num)
// let res = array.reduce((sum, item) => sum + item, 0) / array.length
// console.log(res)

// // #13
// let num = 10
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         if (i % 2 != 0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// let arr = nums(num)
// console.log(arr)

// // #14
// let num = 10
// function nums(n) {
//     let arr = []
//     for (let i = 2; i < n; i++) {
//         if (i <= 1) {
//             break
//         }
//         for (let k = 2; k < i; k++) {
//             if (i % k == 0) {
//                 break
//             }
//             arr.push(i)
//         }
//     }
//     return arr
// }
//
// let arr = nums(num)
// console.log([... new Set(arr)])

// // #15
// let num = 20
// function nums (n) {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//         if (i % 2 != 0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// let arr = nums(num)
// console.log(arr)