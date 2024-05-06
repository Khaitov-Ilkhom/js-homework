// #1
// let number = +prompt("Enter a number")
// function darajagaOshirish (num) {
//     let daraja = num ** 3
//     alert(daraja)
// }
// darajagaOshirish(number)

// #2
// let numOne = +prompt("Enter a number a")
// let numTwo = +prompt("Enter a number b")
//
// function amount (num1, num2) {
//     let amount = num1 + num2
//     alert(amount)
// }
// amount(numOne, numTwo)

// #3
// let numOne = +prompt("Enter a number a")
// let numTwo = +prompt("Enter a number b")
//
// function amount (num1, num2) {
//     if (num1 > num2) {
//         let amount = num1 - num2
//         alert(amount)
//     } else {
//         alert(num1 + " Kichik " + num2 + " dan")
//     }
// }
// amount(numOne, numTwo)

// #4
// let number = +prompt("Enter a number")
// let daraja = +prompt("Nechanchi darajaga oshirmoqchisiz")
//
// function darajagaOshirish(num, daraja) {
//     switch (daraja) {
//         case 2:
//             alert(num ** 2)
//             break
//         case 3:
//             alert(num ** 3)
//             break
//         case 4:
//             alert(num ** 4)
//             break
//     }
// }
// darajagaOshirish(number, daraja)

// #5
// let number = +prompt("Enter a number")
// function toqSonlar (num) {
//     if (num > 0) {
//         let toqSon;
//         for (let i = 1; i <= num; i++) {
//             if (i % 2 !== 0) {
//                 toqSon = i
//                 console.log(toqSon)
//             }
//         }
//     }
// }
// toqSonlar(number)

// #6
// let number = +prompt("Enter a number")
// function juftSonlar (num) {
//     if (num > 0) {
//         let juftSon;
//         for (let i = 1; i <= num; i++) {
//             if (i % 2 === 0) {
//                 juftSon = i
//                 console.log(juftSon)
//             }
//         }
//     }
// }
// juftSonlar(number)

// #7
// let number1 = +prompt("Enter a number")
// function increment (num) {
//     return ++num
// }
// let incre = increment(number1)
// console.log(incre)
//
// let number2 = +prompt("Enter a number")
// function dicrement (num) {
//     return --num
// }
// let dicre = dicrement(number2)
// console.log(dicre)

// #8
// let number = +prompt("Enter a number")
// function boluvhilar (number) {
//     let bolinuvchilar= [];
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             bolinuvchilar = i
//             console.log(bolinuvchilar)
//         }
//     }
// }
// boluvhilar(number)

// #9
// let numOne = +prompt("Enter a number: a")
// let numTwo = +prompt("Enter a number: b")
// let option = prompt("Enter a option: +, -, *, /")
// function calculator (num1, num2, option) {
//     if (num1 > num2) {
//         switch (option) {
//             case '+':
//                 return num1 + num2
//             case '-':
//                 return num1 - num2
//             case '*':
//                 return num1 * num2
//             case '/':
//                 return num1 / num2
//             default:
//                 alert("Invalid option")
//         }
//     } else {
//         alert(num1 + " kichik " + num2 + " dan")
//     }
// }
// let calc = calculator(numOne, numTwo, option)
// alert(calc)
// console.log(calc)

// #10
// for (let i = 1; i < 10; i++) {
//     for (let k = 1; k < 10; k++) {
//         console.log(`${i} * ${k} = ${i * k}`)
//     }
// }










