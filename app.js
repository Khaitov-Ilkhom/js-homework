// // #1
// let arr = [1,2,3,4]
// function findAverage(array) {
//     if (array.length == " "  ) return 0;
//     let result = 0;
//     for (let i = 0; i < array.length; i++){
//         result+= array[i]
//     }
//     return result / array.length
// }
// let find = findAverage(arr)
// console.log(find)

// // #2
// let num = 4;
// let power = 3;
// function numberToPower(number, power){
//     let a = 1
//     for (let i = 0; i < power; i++) {
//         a *= number
//     }
//     return a
// }
// let powers = numberToPower(num, power)
// console.log(powers)

// // #3
// let num = 6
// function createArray(number){
//     let newArray = [];
//
//     for(let i = 1; i <= number; i++){
//         newArray.push(i);
//     }
//     return newArray;
// }
// let arr = createArray(num)
// console.log(arr)

// // #4
// let a = 3
// let b = 10
// let c = 12
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }
// let goal = goals(a, b, c)
// console.log(goal)

// // #5
// let f = 1
// let r = 3
// function lovefunc(flower1, flower2){
//     if (flower1 % 2 == 0 && flower2 % 2 == 0) { return false }
//     if (flower1 % 2 != 0 && flower2 % 2 != 0) { return false }
//     return true
// }
// let flowers = lovefunc(f, r)
// console.log(flowers)

// // #6
// let h = 1;
// let m = 1;
// let s = 1;
// function past(h, m, s){
//     let milliseconds = 0
//     if (h >= 0 && h <= 23){
//         milliseconds += (h * 3600000)
//     }
//     if (m >= 0 && m <= 59){
//         milliseconds += (m * 60000)
//     }
//     if (s >= 0 && s <= 59){
//         milliseconds += (s * 1000)
//     }
//     return milliseconds;
// }
// let hours = past(h, m, s)
// console.log(hours)

// // #7
// let num = 17
// function isPrime(n) {
//     if (n <= 1)
//         return false;
//     for (let i = 2; i < n; i++)
//         if (n % i == 0)
//             return false;
//     return true;
// }
// let number = isPrime(num)
// console.log(number)

// // #8
// let arr = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
// function countPositivesSumNegatives(input) {
//     if(!input || input == 0) return []
//     let a = 0;
//     let b = 0;
//     for(let i = 0; i < input.length; i++) {
//         if(input[i] > 0) a++
//         if (input[i] < 0) {
//             b += input[i]
//         }
//     }
//     return [a, b]
// }
// let sums = countPositivesSumNegatives(arr)
// console.log(sums)

// // #9
// let arr = [1,2,3,4,5]
// function getAverage(arr){
//     return arr[Math.trunc(arr.length / 2)]
// }
// let middleIndex = getAverage(arr)
// console.log(middleIndex)

// // #10
// let str = "Sarah Harry"
// function abbrevName(name){
//     let arr = name.split(' ')
//     let str = []
//     for (let i = 0; i < arr.length; i++) {
//         str.push(arr[i].substring(0, 1))
//     }
//     return str.join('.').toUpperCase()
// }
// let nameStr = abbrevName(str)
// console.log(nameStr)

// // #11
// let a = '123'
// let b = '321'
// function sumStrings(a,b) {
//     let num1 = BigInt(a)
//     let num2 = BigInt(b)
//     return String(num1 + num2)
// }
// let bigIntNumbers = sumStrings(a, b)
// console.log(bigIntNumbers)

// // #12
// let num = -321
// function reverseNumber(n) {
//     let r = n.toString().split('').reverse().join('');
//     return parseInt(r) * Math.sign(n);
// }
// let negative = reverseNumber(num)
// console.log(negative)

// // #13
// let str = "turns out random test cases are easier than writing out basic ones"
// function findShort(s){
//     let arr = s.split(' ')
//     return  Math.min.apply(Math, arr.map(function(str) { return str.length; }))
// }
// let shortLength = findShort(str)
// console.log(shortLength)