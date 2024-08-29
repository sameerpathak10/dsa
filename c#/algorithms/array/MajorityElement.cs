/*
169. Majority Element
Easy
Topics
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
Follow-up: Could you solve the problem in linear time and in O(1) space?*/


public int MajorityElement(int[] nums)
{
    Dictionary<int, int> dt = new Dictionary<int, int>();
    int i = 0, max = nums[0];
    while (i < nums.Length)
    {
        if (dt.ContainsKey(nums[i]))
            dt[nums[i]]++;
        else
            dt.Add(nums[i], 1);
        i++;
    }

    int j = 0, k = nums[0];
    foreach (int key in dt.Keys)
    {
        if (dt[key] > j)
        {
            j = dt[key];
            k = key;
        }
    }
    Console.WriteLine($"k={k} j={j}");
    return k;
}

//Optimized Solution

public int MajorityElement2(int[] nums)
{
    int count = 0, candidate = 0, k = 0;

    for (int i = 0; i < nums.Length; i++)
    {
        if (count == 0)
            candidate = nums[i];
        count += (candidate == nums[i]) ? 1 : -1;
    }

    for (int j = 0; j < nums.Length; j++)
    {
        if (nums[j] == candidate)
            k++;
    }
    Console.WriteLine($"Candidate={candidate} k={k}");
    return candidate;
}


MajorityElement([3, 2, 3]);
MajorityElement2([3, 2, 3]);
MajorityElement([2, 2, 1, 1, 1, 2, 2]);
MajorityElement2([2, 2, 1, 1, 1, 2, 2]);

/*To optimize the `MajorityElement` function for space complexity of **O(1)**, you can use the **Boyer-Moore Voting Algorithm**. This algorithm finds the majority element in linear time and constant space. Here's how you can implement it:

### Boyer-Moore Voting Algorithm

The Boyer-Moore Voting Algorithm works by maintaining a count that is incremented or decremented based on the current element. If the count reaches zero, the candidate is updated to the current element.


### Explanation

1. **Phase 1: Finding a Candidate**:
   - Iterate through the array.
   - Maintain a `count` and a `candidate`.
   - If `count` is zero, update the `candidate` to the current element.
   - Increment `count` if the current element is the same as `candidate`, otherwise decrement it.

2. **Phase 2: Verifying the Candidate** (optional):
   - Iterate through the array again to count the occurrences of the candidate.
   - This step ensures the candidate is indeed the majority element, but it can be skipped if the problem guarantees a majority element.

### Time and Space Complexity

- **Time Complexity**: **O(n)**, as it iterates through the array twice.
- **Space Complexity**: **O(1)**, as it uses a constant amount of extra space.

This optimized approach ensures that the function runs in linear time and uses constant space, making it highly efficient.

Does this help? If you have any more questions or need further clarification, feel free to ask!

Source: Conversation with Copilot, 26/8/2024
(1) Big O Cheat Sheet – Time Complexity Chart - freeCodeCamp.org. https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/.
(2) Mastering Algorithm Complexity: Time & Space Optimization. https://daily.dev/blog/mastering-algorithm-complexity-time-and-space-optimization.
(3) Time, Space and Complexity - oliverschmidt.dev. https://oliverschmidt.dev/blog/time-space-and-complexity/.
(4) Space optimization using bit manipulations - GeeksforGeeks. https://www.geeksforgeeks.org/space-optimization-using-bit-manipulations/.
(5) What does Constant Time Complexity or Big O(1) mean?. https://www.geeksforgeeks.org/what-does-constant-time-complexity-or-big-o1-mean/.*/