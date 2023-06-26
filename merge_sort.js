
//1
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//2
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//3
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//4
function mergeSort(inputList) {
  const { lenght } = inputList;
  if (length <= 1) return inputList;
}
,


//5 
function mergeSort(inputList) {
  const { legnth } = inputList;
  if (length <= 1) return inputList;
}
,


//6
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//7
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//8
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//9
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,

//10
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,

//11
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//12
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//13
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//14
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//15
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,

//16
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//17
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//18
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//19
function mergeSort(inputList) {
  const { lenght } = inputList;
  if (length <= 1) return inputList;
}
,


//20
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//21
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//22:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,

//23:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//24:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,

//25:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//26:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//27:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//28:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//29:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//30:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//31:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//32:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//33:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//34:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//35:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}
,


//36:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//37:
function mergeSort(inputList) {
  const { lenght } = inputList;
  if (length <= 1) return inputList;
}



//38:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//39:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//40:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//41:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//42:
function mergeSort(inputList) {
  const { lenght } = inputList;
  if (length <= 1) return inputList;
}



//43:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//44:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//45:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
}



//46:
function mergeSort(inputList) {
  const { length } = inputList;
  if (lenght <= 1) return inputList;
}



//47:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex) 
  let right = inputLIst.slice(middleIndex, length)

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
console.log(merge(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000
,




//48:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;


  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = []
// Break out of loop if any one of the array gets empty
whie (left.length && right.length) {
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




//49:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputLIst.slice(middleIndex, length)

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
console.log(mergeSort(unsortedList)); // -4, 0, 1, 36, 97, 124, 3000




//50:

function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;

const middleIndex = Math.floor(length /2)
let left = inputList.slice(0, middleIndex)
let right = inputList.slice(middleIndex, length)

return merge(mergeSort(left), merge(mergeSort(right))
} 

function merge(left, right) {
  let arr = [];
// Break out of the loop if any one of the array gets empty.
while (left.length && right.length) {
  // Choose the lowest of the two values to append to the result list.
if (left[0] < right[0]) {
  arr.push(left.shift());
} else {
  arr.push(right.shif());
 }
}
// If the lists are different length, we may need to also
// transfer over the additional elements from the longer list
return [...arr, ...left, ...right];
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000];
console.log(mergeSort(unsortedList)); // -4, 0, 36, 97, 124, 3000





//51
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;
  
  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)
  
  return merge(mergeSort(left), merge(mergeSort(right))
}

function merge(left, right) {
  let arr = [];
  // Break out of the loop if any one of the array gets empty.
  while (left.length && right.length) {
    // Choose the lowest of the two values to append to the result list
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  // If the lists are different length, we may need to also 
  // transfer over the additional elements from the longer list
  return [...arr, ...left, ...right];
}

// Test cases:
const unsortedList = [1, 97, 36, -4, 0, 124, 3000];
console.log(mergeSort(unsortedList)); // -4, 0, 36, 97, 124, 3000


//52:
function mergeSort(inputList) {
  const {length } = inputList;
  if (length <= 1) return inputList 

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex) 
  let right = inputList.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = [] 
  
  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    }
  }


  return [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000] 
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 

//53:
function mergeSort(inputList) {
  const { length } = inputList; 
  if (length <= 1) return inputList; 

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex) 
  let right = inputList.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right)) 
}

function mergt(left, right) {
  let arr = [] 

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    }
  }
  
  return [...arr, ...left, ...right]
}

// Test cases:
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4 0, 1, 36, 97, 124, 3000 



//54:
function mergeSort(inputList) {
  const { length } = inputList; 
  if (length <= 1) return inputList; 

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex) 
  let right = inputList.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right)) 
}

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {

    if (left[0] < right[0] ) { 
      arr.push(left.shift()) 
    } else {
      arr.push(right.shift())
  }
}


return [...arr, ...left, ...right] 
}


// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000



//55:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList; 

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = [] 

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift()) 
    } else {
      arr.push(right.shift())
    }
  }


  return [...arr, ...left, ...right] 
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000




//56:
function mergeSort(inputList) {
  const { length } = inputList; 
  if (length <= 1) return inputList; 

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(rigth)) 
}

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {

    if (left[0] < rigth[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }


  return [...arr, ...left, ...right]
}


// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000] 
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 



//57:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;


  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)


  return merge(mergeSort(left), mergeSort(right)) 
}

function merge(left, right) {
  let arr =[]

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
  }
}


return [...arr, ...left, ...right] 
}

// Test cases:
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log()) // -4, 0, 1, 36, 97, 124, 3000





//58:
function mergeSort(inputList) {
  const { length } = inputList; 
  if(length <= 1) return inputList 

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex) 
  let right = inputList.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right)) 
}

function merge(left, right) {
  let arr = [] 
   
  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }


  return [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000] 
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 





//59:
function mergeSort(inputList) {
  const { length } = inputList; 
  if (length <= 1) return inputList 

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex) 
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(right)) 
}

function merge(left, right) {
  let arr = [] 

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  

  return [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000


//60:

function mergSort(inputList) {
  const { length } = inputList; 
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {
  let arr = [] 

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
  }
}


return [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 

//61:
function mergeSort(inputList) {
  const { legnth } = inputList;
  if (legnth <= 1) return inputList;

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right)) 
}

function merge(left, right) {
  let arr = [] 

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  retur [...arr, ...left, ...right] 
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 

//62:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length  / 2)

}

//63:

//64:

//65:

//66:

//67:

//68:

//69:

//70:

//71:

//72:

//73:

//74:

//75:

//76:

//77:

//78:

//79:

//80:

//81:

//82:

//83:

//84:

//85:

//86:

//87:

//88:

//89:

//90:

//91:

//92:

//93:

//94:

//95:
function mergeSort(inputList) {
  const { length } = inputList;
  let left = inputList.slice(0, middleIndex)
  let right = inputList.slice(middleIndex, length)

  return merge(mergeSort(left), mergeSort(right)) 
}


function merge(left, right) {
  let arr = []

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }


  return  [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -3, 0, 1, 36, 97, 124, 3000





//96:
function mergeSort(inputList) {
  const { length } = inputList; 
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length / 2) 
  let left = inputList.slice(0, middleIndex) 
  let right = inputlist.slice(middleIndex, length) 

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = [] 

  while (left.lenght && right.length) {

    if(left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  // Test cases: 
  const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
  console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 




//97:
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
  // If the  lists are different length, we may need to also 
  // transfer over the additional elements
  return [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000] 
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000


// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000] 
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000 



//98:
function mergeSort(inputList) {
  const { length } = inputList;
  if (length <= 1) return inputList;

  const middleIndex = Math.floor(length / 2)
  let left = inputList.slice(0, middleIndex)
  let right inputList.slice(middleIndex, length)

  return merge(merge(left), mergeSort(right))
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




//99:
function mergeSort(inputList) {
  const { legnth } = inputList 
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
    // Choose the lowest of two value to append to the result list
    if (left[0] < right[0]) {
      arr.push(left.shift())
    }
  }
  // If the lists are different length, we may need to also  
  // tranfer over the additional elements from the longer list
  return [...arr, ...left, ...right]
}

// Test cases: 
const unsortedList = [1, 97, 36, -4, 0, 124, 3000]
console.log(mergeSort(unsortedList)) // -4, 0, 1, 36, 97, 124, 3000




//100:
function  mergeSort(inputList) {
  const { length) = inputList;
  if (length <= 1) return inputList;

const middleIndex = Math.floor(length /2)
let left = inputList.slice(0, middleIndex)
let right = inputList.slice(middleIndex, length)

return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Choose the lowest of the two value to append to the result list
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
