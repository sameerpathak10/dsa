/*Longest incremental subsequence */
function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0)
        return 0;
    let nums2: number[] = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(`i=${i} j=${j} nums[i]=${nums[i]} nums[j]=${nums[j]} `);
            if (nums[i] > nums[j]) {
                console.log(` nums2[i]=${nums2[i]} nums2[j]=${nums2[j]}`);
                nums2[i] = Math.max(nums2[i], nums2[j] + 1);
                console.log(`nums2=[${nums2}]  nums2[i]=${nums2[i]} nums2[j]=${nums2[j]}`);
            }
        }
    }
-[]
    return Math.max(...nums2);
};

//console.log(`result=${lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])}`);
//console.log(`result=${lengthOfLIS([9,9,2,4])}`);
console.log(`result=${lengthOfLIS([3,1,8,2,5])}`);