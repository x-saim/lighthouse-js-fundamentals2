//In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function (data) {
  let largestNum = data[0];
  let secondLargest;
  for (i = 1; i < data.length; i++) {
    if (data[i] > largestNum) {
      secondLargest = largestNum;
      largestNum = data[i];
    }
  }
  sum = largestNum + secondLargest;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
