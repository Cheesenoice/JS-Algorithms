function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//ex
const arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", bubbleSort(arr));
