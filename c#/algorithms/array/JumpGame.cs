/*
55. Jump Game
Medium
Topics
Companies
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

public bool CanJump(int[] nums)
{
    int i = 0;
    //Console.WriteLine($" i={i} nums[i]={nums[i]} nums.length={nums.Length}");
   

    while (i < nums.Length)
    {
       // int k = nums.Length == 2 && nums[0] == 2 ? 1 : 0;
        i = i + nums[i];// - k;
       // Console.WriteLine($" i={i} nums[i]={nums[i]} nums.length={nums.Length}");
        if (i >= nums.Length-1)
            return true;
        else if (nums[i] == 0)
            return false;
    }
    return false;
}
public bool CanJump1(int[] nums) {
        int i=0;
        for(int j=0;j<nums.Length;j++){
            if(i < 0)
                return false;
            else if(nums[j]>i)
                i =nums[j];
            i -=1;
        }
        return true;
    }
Console.WriteLine(CanJump([2, 3, 1, 1, 4]));
Console.WriteLine(CanJump([3, 2, 1, 0, 4]));
Console.WriteLine(CanJump([2, 0]));
Console.WriteLine(CanJump([1, 2,3]));
Console.WriteLine(CanJump([0]));
