// Selection Sort

// 1. Find the largest element X in the range of [0...n-1]
// 2. Swap the X with the (n-1)th element
// 3. Reduce n by 1 and go to Step 1

function selectionSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    let maxIdx = i;                     
    for (let j = 0; j < i; j++) {
      if (arr[j] >= arr[maxIdx]) {
        maxIdx = j;   // searching largest element 
      }
    }

    [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]] // swap largest el with with the last i
  } 

  return arr;
}

selectionSort([5,2,1,6,3,10,4])
