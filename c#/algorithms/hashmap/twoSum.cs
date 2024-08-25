// TC: O(n), SC: O(n)
// This is the time and space complexity of the algorithm
/*
function twoSum(nums, target):
    create an empty dictionary dt

    for each element num in nums:
        complement = target - num
        if complement exists in dt:
            return [dt[complement], index of num]
        else:
            add num and its index to dt

    return empty array
*/

public int[] TwoSum(int[] nums, int target)
{
    // Create a dictionary to store the elements of the array
    Dictionary<int, int> dt = new Dictionary<int, int>();
 
    for (int i = 0; i < nums.Length; i++)
    {
        // Calculate the complement we need to find
        int complement = target - nums[i];
        // Check if the complement exists in the dictionary
        if (dt.ContainsKey(complement))
            // If it does, we have found the two numbers            
            return new int[] { dt[complement], i };
        // If not, store the current element and its index in the dictionary
        if (!dt.ContainsKey(nums[i]))
            dt.Add(nums[i], i);

    }
    // If no two numbers sum up to the target, return an empty array
    return new int[] { };
}

// Example usage
int[] test = new int[] { 2, 7, 11, 8 };
Console.WriteLine(String.Join(",", (TwoSum(test, 9))));

int[] test2 = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1];
Console.WriteLine(String.Join(",", (TwoSum(test2, 11))));

