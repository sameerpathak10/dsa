function selectionSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[minIndex]>arr[j])
                minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Test the function
console.log(selectionSort([5, 2, 1, 3, 4])); // Output: [1, 2, 3, 4, 5]