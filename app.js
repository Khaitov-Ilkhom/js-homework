// # 1
// function findNeedle(haystack, needle) {
//   return haystack.indexOf(needle)
// }
// let res = findNeedle("sadbutsad", "sad")
// console.log(res)

// # 2
// let str = "1.1.1.1"
// let arr = str.split(".").join("[.]")
// console.log(arr)

// # 3
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

// # 4
// let str = "luffy is still joyboy"
// let arr = str.split(" ").slice(-1)
// console.log(arr[0].length)

// # 5
// let str = "red white blue" // "red blue gold"
// let arr = str.split(" ");
// const lengths = arr.map(a=> a.length);
// let maxLength = lengths.lastIndexOf(Math.max(...lengths));
// console.log(arr[maxLength])

// # 6
// let str = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
// let arr = str.match(/[0-9]/g )
// console.log(arr)

// # 7
// function isItLetter (letter) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz"
//     if (alphabet.includes(letter)) return true
//     return false
// }
// let res = isItLetter('h')
// console.log(res)

// # 8
// function isItAnagram(str1, str2) {
//     let normalized1 = str1.toLowerCase().split('').sort().join('');
//     let normalized2 = str2.toLowerCase().split('').sort().join('');
//
//     return normalized1 === normalized2;
// }
// let res = isItAnagram("Listen", "Silent")
// let res2 = isItAnagram("Apple", "Papel")
// let res3 = isItAnagram("Rat", "Car")
// console.log(res);
// console.log(res2);
// console.log(res3);

// # 9
// let arr = [ 1, 1, 1, 2, 1, 1 ]
// let newArr = Math.max(... new Set(arr))
// console.log(newArr)

// # 10
// function contrast (word1, word2) {
//     let str1 = word1.join('');
//     let str2 = word2.join('');
//
//     return str1 === str2;
// }
// let res = contrast( ["ab", "c"],  ["a", "bc"])
// console.log(res)
