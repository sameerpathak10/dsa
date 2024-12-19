function generateSubsets2(nums: number[]): number[][] {

    const result: number[][] = [];

    const currentSet: number[] = [];
    result.push([...currentSet]);
    for (let i = 0; i < nums.length; i++) {
        currentSet.push(nums[i]);
        for (let l = i + 1; l < nums.length; l++) {

            let j = l;
            while (j < nums.length) {
                result.push([...currentSet]);
                currentSet.push(nums[j]);
                j++;
            }
            result.push([...currentSet]);
            console.log(`After result:${result} currentSubset:${currentSet}`);
            let k = nums.length-1;

            while (k > i) {
                console.log(`Before pop k:${k} i:${i} currentSet:${currentSet}`)
                currentSet.pop();
                k--;
                console.log(`After pop currentSet:${currentSet}`);
            }
        }
    }
    return result;
}

console.log(generateSubsets2([1, 2, 3]));
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
function generateSubsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(startIndex: number, currentSubset: number[]) {
        result.push([...currentSubset]); // Add the current subset
        console.log(`startIndex:${startIndex} Before pop result:${result} currentSubset:${currentSubset}`);
        for (let i = startIndex; i < nums.length; i++) {
            console.log('********************start**********************');
            currentSubset.push(nums[i]);         // Include the current element
            backtrack(i + 1, currentSubset);     // Recurse with remaining elements 
            console.log(`Before pop result:${result} i:${i} currentSubset:${currentSubset}`)
            currentSubset.pop();                  // Backtrack and remove the last element
            console.log(`After pop result:${result} i:${i} currentSubset:${currentSubset}`)
            console.log('*********************end*********************');
        }
    }

    backtrack(0, []);
    return result;
}

console.log(generateSubsets2([1, 2, 3]));
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]