/**
 * 
Code
Testcase
Test Result
Test Result
416. Partition Equal Subset Sum
Medium
Topics
Companies
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
 */

function canPartition(nums: number[]): boolean {

    let total: number = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    if (total % 2 != 0)
        return false;
    let target = total / 2;

    let dp: boolean[] = new Array(target + 1);
    dp[0] = true;

    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            console.log(` num=${num} j=${j} dp[j]=${dp[j]} dp[j-num]= ${dp[j - num]}`);
            dp[j] = dp[j] || dp[j - num];
            console.log(` dp[j]=${dp[j]}`);
        }
    }

    console.log(dp);
    return dp[target];
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([5, 12, 5]));