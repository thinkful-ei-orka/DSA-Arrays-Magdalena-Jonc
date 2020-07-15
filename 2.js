const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 1;

  let arr = new Array();

  //2.
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  //Length: 6, Capacity: 12, Mem Address: 3 | Length is 6 due to the total amount of data in the array, Capacity
  console.log(arr);

  //3.
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  //4.
  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  arr.push('tauhida');
  console.log(arr);
}

//5.
function urlify(string) {
  return string.split(' ').join('%20');
}

//6.
function filterNums(arrayOfNums) {
  result = [];
  for (i = 0; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] >= 5) {
      result.push(arrayOfNums[i]);
      //   break;  <- return the first value in array larger than or equal to 5
    }
  }
  return result;
}

//7.
function maxSum(numArray) {
  let sumOfNums = [0];
  //Record the sum of each item in array
  for (i = 0; i < numArray.length; i++) {
    result = sumOfNums[i] + numArray[i];
    sumOfNums.push(result);
  }
  console.log(sumOfNums);
  return Math.max(...sumOfNums);
}

//8.
function mergeArrays(a, b) {
  const newArray = [];
  let arrayIndexA = 0;
  let arrayIndexB = 0;

  while (newArray.length < a.length + b.length) {
    if (a[arrayIndexA] < b[arrayIndexB] || !b[arrayIndexB]) {
      newArray.push(a[arrayIndexA]);
      arrayIndexA++;
    } else {
      newArray.push(b[arrayIndexB]);
      arrayIndexB++;
    }
  }
  return newArray;
}

//9.
function removeChars(string, chars) {
  const oldString = [...string];
  const charsToRemove = [...chars];

  let newString = '';
  //   const finalString = '';

  for (let i = 0; i < oldString.length; i++) {
    for (let j = 0; j < charsToRemove.length; j++) {
      if (oldString[i] != charsToRemove[j]) {
        console.log(oldString[i]);
        console.log(charsToRemove[j]);
        // newString.push(oldString[i]);
        newString += oldString[i];
        break;
      }
    }
  }
  //   return finalString.concat(newString);
  return newString;
}

main();
console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));
console.log(filterNums([1, 8, 4, 6, 3, 7, 8]));
console.log(maxSum([4, 6, -3, 5, -2, 1]));

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
