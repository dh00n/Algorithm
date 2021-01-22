const quickSort = (array, left = 0, right = array.length - 1) => {
    const divide = (array, left, right, pivot) => {
        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }
            while (array[right] > pivot) {
                right--;
            }
            if (left <= right) {
                let swap = array[left];
                array[left] = array[right];
                array[right] = swap;
                left++;
                right--;
            }
        }
        return left;
    }
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);
    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    return array;
}
