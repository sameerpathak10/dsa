/*
189. Rotate Array
Medium
Topics
Companies
Hint
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 
 */

public void RotateArray(int[] nums, int k)
{

    while (k > 0)
    {
        int previous = nums[0];
        for (int i = 1; i <= nums.Length; i++)
        {

            int temp = previous;

            if (i == nums.Length)
                nums[0] = temp;
            else
            {
                previous = nums[i];
                nums[i] = temp;
            }

        }
        k--;
    }
    Console.WriteLine($" nums={String.Join(",", nums)}");
}

public void RotateArray2(int[] nums, int k)
{
    int n = nums.Length;
    Console.WriteLine($" k= {k} k%n={k % n}");
    k = k % n;


    Reverse(nums, 0, n - 1);
    Console.WriteLine($"Reverse all: nums={String.Join(",", nums)}");
    Reverse(nums, 0, k - 1);
    Console.WriteLine($"Reverse K ={k} element: nums={String.Join(",", nums)}");
    Reverse(nums, k, n - 1);
    Console.WriteLine($"Reverse remaining: nums={String.Join(",", nums)}");
}

private void Reverse(int[] nums, int start, int end)
{
    while (start < end)
    {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;
    }
}

public void RotateArray3(int[] nums, int k)
{
    int n = nums.Length;
    k = k % n; // In case k is greater than the length of the array

    // Create a temporary array to store the rotated elements
    int[] temp = new int[n];

    // Copy the rotated elements to the temporary array
    for (int i = 0; i < n; i++)
    {
        temp[(i + k) % n] = nums[i];
    }

    // Copy the elements back to the original array
    for (int i = 0; i < n; i++)
    {
        nums[i] = temp[i];
    }

    Console.WriteLine($"nums={String.Join(",", nums)}");
}

RotateArray2([1, 2, 3, 4, 5, 6, 7], 3);
RotateArray2([-1, -100, 3, 99], 2);