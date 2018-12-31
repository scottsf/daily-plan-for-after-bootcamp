// Bubble Sort

// 1. Compare pair of adjacent items
// 2. Swap if the items are out of order
// 3. Repeat until the end of array
    // The largest item will be at the last position
// 4. Reduce n by 1 and go to Step 1

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j-1] > arr[j]) {  
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]] // Swap if the items are out of order
      }
    }
  }
  return arr;
}

bubbleSort([5,2,1,3,4])
