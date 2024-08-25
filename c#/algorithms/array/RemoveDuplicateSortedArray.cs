/*
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

public int RemoveDuplicates1(int[] nums)
{
    int k = 1;
    for (int i = 1; i < nums.Length; i++)
    {
        if (nums[i] != nums[i - 1])
        {
            nums[k] = nums[i];
            k++;          
        }
    }
    //Console.WriteLine($" Count ={k} nums={String.Join(",", nums)}");
    return k;

}


public int RemoveDuplicates2(int[] nums)
{
    var i = nums.Length > 0 ? 1 : 0;

    for (var j = 1; j < nums.Length; j++)
    {        
        while (j < nums.Length && nums[j] == nums[i - 1])        
            j++;
            
        if (j < nums.Length && i < nums.Length)        
            nums[i++] = nums[j];        
    }
    //Console.WriteLine($" Count ={i} nums={String.Join(",", nums)}");
    return i;
}

RemoveDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
RemoveDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
//RemoveDuplicates([1, 1, 2]);

/*
The RemoveDuplicates2 function is more optimized than RemoveDuplicates1 due to its handling of duplicate elements and its overall structure. Here’s a detailed comparison:

1. Handling of Duplicates
RemoveDuplicates1: This function checks each element against the previous one in a single loop. If the current element is different from the previous one, it assigns the current element to the next position in the array and increments the counter k.
RemoveDuplicates2: This function uses a nested while loop to skip over consecutive duplicates more efficiently. It only assigns a new value to the array when it finds a non-duplicate element, reducing unnecessary assignments.
2. Loop Structure
RemoveDuplicates1: The loop runs from the second element to the end of the array, performing a comparison and assignment in each iteration.
RemoveDuplicates2: The outer for loop runs similarly, but the inner while loop skips over duplicates, reducing the number of iterations and assignments.
3. Efficiency
RemoveDuplicates1: This function performs a comparison and potential assignment for each element in the array, leading to more operations.
RemoveDuplicates2: By skipping over duplicates with the while loop, this function reduces the number of operations, making it more efficient in cases where there are many consecutive duplicates.
Example
Consider an array with many duplicates, like [1, 1, 1, 2, 2, 3, 3, 3, 3]:

RemoveDuplicates1: Will perform a comparison and assignment for each element.
RemoveDuplicates2: Will skip over the duplicates in fewer steps, reducing the number of assignments.



Let’s analyze the time and space complexity of both RemoveDuplicates1 and RemoveDuplicates2 functions.

RemoveDuplicates1:

    Time Complexity:
        The function iterates through the array once with a single for loop.
        Each iteration involves a comparison and, in some cases, an assignment.
        Therefore, the time complexity is O(n), where n is the length of the array.

    Space Complexity:
        The function uses a constant amount of extra space for variables k and i.
        It modifies the array in place without using additional data structures.
        Therefore, the space complexity is O(1).

RemoveDuplicates2:
    Time Complexity:
        The outer for loop iterates through the array once.
        The inner while loop skips over consecutive duplicates. In the worst case, each element is processed once by the for loop and potentially multiple times by the while loop.
        However, since each element is only processed a limited number of times, the overall time complexity remains O(n).
    Space Complexity:
        Similar to RemoveDuplicates1, this function uses a constant amount of extra space for variables i and j.
        It also modifies the array in place without using additional data structures.
        Therefore, the space complexity is O(1).

Summary:Both RemoveDuplicates1 and RemoveDuplicates2 have the same time and space complexity:

Time Complexity: O(n)
Space Complexity: O(1)
The optimization in RemoveDuplicates2 comes from reducing the number of assignments and comparisons, making it more efficient in practice, especially for arrays with many consecutive duplicates.
*/