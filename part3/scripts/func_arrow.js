let data = [1, 2, 3];

// let formatted = data.map(function (value, index) {
//     return value * value;
// });
// console.log(formatted);

let formatted = data.map((value, index) => value * value);
console.log(formatted);