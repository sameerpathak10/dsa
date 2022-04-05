using System;
using System.Collections;
using System.Collections.Generic;


namespace Algorithms
{
    public class Complexity
    {

        public void calculate1(int[] nums, int target)
        {
            int count = 0;
            for (int i = 0; i < nums.Length; i++)
            {
                count++;
                for (int j = i + 1; j < nums.Length; j++)
                {
                    count++;
                    if (nums[i] + nums[j] == target)
                    {
                        Console.WriteLine($"Result : {i} {j}");
                    }
                }
            }
            Console.WriteLine($"Complexity for Array of Size: {nums.Length} is {count}");

        }
        public void calculate(int[] nums, int target)
        {
            //Dictionary<int,int> map = new Dictionary<int,int>();
            Hashtable map = new Hashtable();
            int i = 0, length = nums.Length;
            int count = 0;
            while (i < length)
            {
                int curr = nums[i];
                int req = target - curr;
                if (map.ContainsValue(req))
                {
                    int index =0;// map.Keys.FirstOrDefault(x => map[x] == req);
                    if (index != i)
                    {
                        Console.WriteLine($"Result : {index} {i}");
                    }
                }
                map.Add(i, nums[i]);
                i++;
            }

            Console.WriteLine($"Complexity for Array of Size: {nums.Length} is {count}");
        }
    }
    public class Solution
    {

        public int LengthOfLongestSubstring(string s)
        {
            int result = 0;
            Dictionary<int,string> map = new Dictionary<int, string>();
            for (int j = 0, i = 0; j < s.Length; j++)
            {
                Console.WriteLine($" Value S[j] : {s[j]}  i:  {i} j: {j}");
                if (map.ContainsValue(s[j].ToString()))
                    i = 0;//Math.Max(map.FirstOrDefault(x=> x.Value == s[j].ToString()).Key, i);

                result = Math.Max(result, j - i + 1);
                map.Add(j + 1, s[j].ToString());
            }
            return result;
        }
    }
}
