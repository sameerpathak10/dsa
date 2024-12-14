function radixSort(arr: number[]) {
    const max = Math.max(...arr);
    console.log(max, max.toString().length);
    let maxLength = max.toString().length;
    for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        console.log(buckets);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            console.log(digit);
            buckets[digit].push(arr[j]);
            console.log(`-->buckets:${buckets}`);
        }
        console.log(`buckets:${buckets}`);
        arr = [].concat(...buckets);
    }
    return arr;
}

function getDigit(num: number, place: number) {
    console.log(`num: ${num} place: ${place} ABS:${Math.abs(num)} POW:${Math.pow(10, place)} Floor:${Math.floor(Math.abs(num) / Math.pow(10, place))} `)
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Test the function
console.log(radixSort([5, 2, 1, 3, 4,11,12])); // Output: [1, 2, 3, 4, 5]