function quickSort(array, left, right) {
  if (array.length === 0) return;

  let l = left || 0;
  let r = right || array.length - 1;

  let index = partition(array, l, r);
  if (l < index - 1) {
     quickSort(array, l, index - 1);
  }

  if (index < r) {
     quickSort(array, index, r);
  }

  return array;
}


function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
}

quickSort([5,1,2,6,3])

