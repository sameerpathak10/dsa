function quickSort(
    arr: number[],
    left: number = 0,
    right: number = arr.length - 1
) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);// Recursively sort left sub-array
        quickSort(arr, pivotIndex + 1, right);// Recursively sort right sub-array
    }
    return arr;
}

function partition(arr: number[], left: number, right: number) {
    const pivot = arr[right]; // Choosing the last element as pivot
    let i = left; // Pointer for the smaller element
    for (let j = left; j < right; j++) {
        console.log(`j=${j} i=${i} arr[j]=${arr[j]} pivot=${pivot}`);
        if (arr[j] < pivot) {// If current element is smaller than or equal to pivot
            console.log(`i=${i} j=${j}`);
            // Swap elements
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        console.log(`a[i]=${arr} pivot=${pivot}`);
    }
    // Swap pivot into correct position
    arr[right] = arr[i];
    arr[i] = pivot;
    console.log(`Pivot Index: ${i} a[i]=${arr} pivot=${pivot}`);
    return i;
}

// Test the function
console.log(quickSort([2, 1, 5, 3, 4])); // Output: [1, 2, 3, 4, 5]