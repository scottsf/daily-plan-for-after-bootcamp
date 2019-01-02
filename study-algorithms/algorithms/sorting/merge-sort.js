// Merge Sort

// 1. Divide the array into halves, call function itself for the two halves
// 2. Conquire by merging sorted two halves

function mergeSort(arr) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let leftArr = mergeSort(left);
    let rightArr = mergeSort(right);
    return merge(leftArr, rightArr)
  }
  return arr;
}


function merge(leftArr, rightArr) {
  let container = [];
  let leftIdx = 0;
  let rightIdx = 0;
  let idx = 0;

  while(leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      container[idx] = leftArr[leftIdx++];
    } else {
      container[idx] = rightArr[rightIdx++];
    }
    idx++;
  }

  while(leftIdx < leftArr.length) {
    container.push(leftArr[leftIdx++])
  }

  while(rightIdx < rightArr.length) {
    container.push(rightArr[rightIdx++]);
  }

  return container;
}

mergeSort([14,2,3,1,56,5]);

// Time complexity:
// Worst case scenario O(nLogn)
// Best case scenario O(nLogn)

// Space complexity is O(n)
