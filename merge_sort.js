// function mergeSort(inputList) {
//   const { length } = inputList;
//   if (length <= 1) return inputList;

//   const middleIndex = Math.floor(length / 2);
//   let = inputList.slice(0, middleIndex);
//   let = inputList.slice(middleIndex, length);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let arr = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }

//   return [...arr, ...left, ...right];

//   // Test cases:
//   const unsortedList = [1, 97, 36, -4, 0, 124, 3000];
// }

function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}

const middleIndex = Math.floor(length / 2);
let = inputList.slice(0, middleIndex);
let = inputList.slice(middleIndex, length);

return merge(mergeSort(left), mergeSort(right));

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];

  const unsortedList = [9, 27, 36, -4, 0, 124, 3000];
}
