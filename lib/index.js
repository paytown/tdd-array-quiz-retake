// function library(arr) {
//   arr.filter((number) => {
//     const bigNumbers = [];
//     if(number >= 5) {
//       console.log(arr);
//       return bigNumbers.push(number);
//     }
//   });
// }

function library(arr) {
  return arr.filter(number => number >= 5);
}
module.exports = library;

