// Insertion Sort

// 1. Iterate over the arr, but start by picking the second element in the array (assume the firstEl is the start of the 'sorted' portion)
// 2. Now compare the nextEl with the one before it and swap if necessary.
// 3. if nextEl is in the incorrect order, shift sorted elements by 1 step and place the nextEl in the correct place in the 'sorted' portion.
// 3. Repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nextEl = arr[i];
    let j = undefined;
    for (j = i - 1; j >= 0 && arr[j] > nextEl; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = nextEl;
  }
  return arr;
}

insertionSort([4,2,1,3,5])

// Run time complexity:
// Best case scenario run-time complexity O(n)
// Worst case scenario run-time complexity O(n2)


