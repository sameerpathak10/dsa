function pivotIndex(nums: number[]): number {

    let len = nums.length, k = 0;
    let leftSumArr: number[] = [], rightSumArr: number[] = [], leftSum = 0, rightSum = 0;

    for (let i = 0; i < len; i++) {
        leftSum += nums[i];
        leftSumArr[i] = leftSum;
        rightSum += nums[len - 1 - i];
        rightSumArr[len - 1 - i] = rightSum;
    }
   // console.log(`->>leftSum:${leftSum} rightSum:${rightSum} leftArr:${leftSumArr} rightArr:${rightSumArr}`);

    while (k < len) {
        //console.log(`leftSum:${leftSum} rightSum:${rightSum}`);
        if (leftSumArr[k] == rightSumArr[k])
            return k;
        k++;
    }
    return -1;
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([-1,1,2])); //2
console.log(pivotIndex([2,1,-1])); //0
