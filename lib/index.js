function library(arr) {
  arr.filter((number) => {
    const bigNumbers = [];
    if(number >= 5) {
      console.log(number);
      return bigNumbers.push(number);
    }
  });
}

module.exports = library;

