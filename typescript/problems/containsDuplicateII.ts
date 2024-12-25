/**
 * 
 * @param nums 
 * @param k 
 * @returns 
 * 
 * 219. Contains Duplicate II
Solved
Easy
Topics
Companies
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
 */

function containsNearbyDuplicate2(nums: number[], k: number): boolean {
    let min = Infinity;
    let l = 0, len = nums.length;
    while (l < len) {
        let i = l, j = l + 1;
        while (j < len) {
            if (nums[i] == nums[j]) {
                //console.log(`i:${i} j:${j} nums[i]=${nums[i]} nums[j]=${nums[j]} min:${min} Math.abs(i - j):${Math.abs(i - j)}`);
                min = Math.min(min, Math.abs(i - j));
                i = j;
                if (min <= k)
                    return true;
            }
            j++
        }
        l++;
    }

    return false;
};
function containsNearbyDuplicate3(nums: number[], k: number): boolean {
    let i = 0, j = 0, l = 0, len = nums.length;

    while (l < len) {
        if (i !== j && nums[i] == nums[j]) {
            if (Math.abs(i - j) <= k)
                return true;
            i = j;
        }
        j++;

        if (j == len) {
            i = l, j = l + 1;
            l++;
        }
        console.log(`i:${i} j:${j} l:${l}`);
    }
    return false;
};
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let i = 0, len = nums.length;
    let hashTable: Map<number,number> = new Map();
    while (i < len) {
        let x = nums[i];
        if (hashTable.has(x) && (Math.abs(i - hashTable.get(x)) <= k))
            return true;       
        hashTable.set(x, i);
        i++;
    }
    return false;
};
console.log(containsNearbyDuplicate([1], 1));
console.log(containsNearbyDuplicate([1,0,1,1], 2));