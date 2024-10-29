/*
14. Longest Common Prefix
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

public string LongestCommonPrefix2(string[] strs)
{
    if (strs.Length == 1)
        return strs[0];
    char[] chr1 = strs[0].ToCharArray();
    char[] result = new char[chr1.Length];
    int minLen = chr1.Length;
    for (int i = 1; i < strs.Length; i++)
    {
        char[] nxt = strs[i].ToCharArray();
        int j = 0;

        while (j < chr1.Length && j < nxt.Length && j < minLen)
        {
            if (chr1[j] == nxt[j])
            {
                result[j] = chr1[j];

                Console.WriteLine($" j={j} minLen={minLen} result={String.Concat(result)}");
            }
            else
                break;
            j++;
        }
        minLen = minLen > j ? j : minLen;
        while (j < chr1.Length)
        {
            result[j] = ' ';
            j++;
        }
    }

    Console.WriteLine($"result={String.Concat(result)}");
    return String.Concat(result).Trim();
}


public string LongestCommonPrefix(string[] strs)
{
    if (strs.Length == 1)
        return strs[0];
    string prefix = strs[0];
    for (int i = 1; i < strs.Length; i++)
    {
        Console.WriteLine($"-->i={i} strs[i].IndexOf(prefix) ={strs[i].IndexOf(prefix)} str[i] = {strs[i]} prefix= {prefix}");
        while (strs[i].IndexOf(prefix) != 0)
        {   Console.WriteLine($"i={i} strs[i].IndexOf(prefix) ={strs[i].IndexOf(prefix)} str[i] = {strs[i]}, prefix= {prefix}, prefix-1= {prefix.Substring(0, prefix.Length - 1)}");
            prefix = prefix.Substring(0, prefix.Length - 1);
            if (string.IsNullOrEmpty(prefix))
                return string.Empty;
        }
    }
    Console.WriteLine($"result={prefix}");
    return prefix;
}
LongestCommonPrefix(["flower", "flow", "flight"]);
LongestCommonPrefix(["dog", "racecar", "car"]);
LongestCommonPrefix(["aaa", "aa", "aaa"]);
LongestCommonPrefix(["flower", "flower", "flower", "flower"]);
