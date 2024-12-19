function nextGreaterElements(nums: number[]): number[] {
    const result = new Array(nums.length).fill(-1);
    const stack: number[] = [];

    for (let i = 0; i < nums.length * 2; i++) {
        console.log(`stack.length:${stack.length} && stack[stack.length - 1]:${stack[stack.length - 1]} `);
        console.log(`nums[stack[stack.length - 1]]:${nums[stack[stack.length - 1]]} i % nums.length:${i % nums.length} nums[i % nums.length]:${nums[i % nums.length]}`);

        while (stack.length && nums[stack[stack.length - 1]] < nums[i % nums.length]) {
            result[stack.pop()!] = nums[i % nums.length];
            console.log(`result:${result}`);
        }
        stack.push(i % nums.length);
        console.log(`stack.push:${stack}`);
    }

    return result;
}

console.log(`output:${nextGreaterElements([1, 2, 1])}`);