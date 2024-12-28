/**2357. Make Array Zero by Subtracting Equal Amounts
Solved
Easy
Topics
Companies
Hint
You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.

 

Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100 */
function minimumOperations(nums: number[]): number {

    let minOp = 0, min = -1;

    nums.sort((a, b) => a - b);

    do {
        min = getMin(nums);
        if (min === 0)
            break;
        nums = nums.map(e => e === 0 ? 0 : e - min);
        minOp++;
    } while (min !== 0)
    return minOp;
};
function getMin(nums: number[]): number {
    let i = 0, min = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            min = nums[i];
            break;
        }
        i++;
    }
    return min;
}

function minimumOperations2(nums:number[]): number{
    const uniqueNonZeroElements = new Set(nums.filter(num=>num>0));
    console.log(uniqueNonZeroElements);
    return uniqueNonZeroElements.size;
}
console.log(minimumOperations2([1, 5, 0, 3, 5]));