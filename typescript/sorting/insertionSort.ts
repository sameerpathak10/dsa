function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        console.log(arr,current);
        arr[j + 1] = current;
        console.log(`-->${arr}`);
    }
    return arr;
}

// Test the function
console.log(insertionSort([5, 2, 1, 3, 4])); // Output: [1, 2, 3, 4, 5]