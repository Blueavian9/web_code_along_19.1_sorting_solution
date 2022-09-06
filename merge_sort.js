function mergeSort(inputList) {
  const { length } = inputList
  if (length <= 1) return inputList

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Choose the lowest of the two values to append to the result list
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  // If the lists are different length, we may need to also
  // transfer over the additional elements from the longer list
  return [...arr, ...left, ...right]
}

// Test cases:
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000
