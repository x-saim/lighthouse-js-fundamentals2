//adding only the numbers in the array which match the given condition.
//Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

//Conditional Sums

const conditionalSum = function (values, condition) {
  let evenArray = [];
  let oddArray = [];
  if (values.length >= 1 && condition === 'even') {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        evenArray.push(values[i]);
        var sumEvenArray = 0;
        for (j = 0; j < evenArray.length; j++) {
          sumEvenArray += evenArray[j];
        }
      }
    }
    return sumEvenArray;
  } else if (values.length >= 1 && condition === 'odd') {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 > 0) {
        oddArray.push(values[i]);
        var sumOddArray = 0;
        for (j = 0; j < oddArray.length; j++) {
          sumOddArray += oddArray[j];
        }
      }
    }
    return sumOddArray;
  } else {
    if (values.length === 0) {
      return 0;
    }
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
