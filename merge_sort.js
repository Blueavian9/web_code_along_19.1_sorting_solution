function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length / 2);
  let left = inputList.slice(0, middleIndex);
  let right = inputlist.slice(middleIndex, length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shif());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

// Test cases:
const unsortedList = [1, 97, 36, -4, 0, 124, 3000];
console.log(mergeSort(unsortedList)); // -4, 0, 1, 36, 97, 124, 3000
