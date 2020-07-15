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
  arr = [];
  console.log(arr);
  arr.push('tauhida');
  console.log(arr);
}

main();
