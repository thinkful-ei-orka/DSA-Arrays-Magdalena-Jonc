function intersection(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++)
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
  }
  return result;
}

// function intersection(a, b) {
//   const result = [];
//   const concatArr = a.concat(b).sort();
//   for (let i = 0; i < concatArr.length - 1; i++) {
//     if (concatArr[i + 1] === concatArr[i]) {
//       result.push(concatArr[i]);
//     }
//   }
//   return result;
// }

console.log(intersection([], [1])); //[]
console.log(intersection([1], [1])); //[1]
console.log(intersection([1, 2, 3], [1, 2, 3])); //[1,2,3]
console.log(intersection([1, 2, 3], [4, 5, 6])); //[]

console.log(intersection([1, 2, 3, 3, 6], [1, 3, 4, 7])); //[1,3]

console.log(intersection([1, 3, 4, 6, 7, 9], [1, 4, 5, 7, 9, 10])); //[1,4,7,9]
