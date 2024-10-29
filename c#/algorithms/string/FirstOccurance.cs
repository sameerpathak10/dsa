/*
28. Find the Index of the First Occurrence in a String
Easy
Topics
Companies
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/
public int StrStr2(string haystack, string needle)
{
    //Time  = O(n*m) and Space =O()
    Console.WriteLine($" index={haystack.IndexOf(needle)}");
    return haystack.IndexOf(needle);
}


public int StrStr(string haystack, string needle)
{
    if (needle.Length == 0) return 0;
    if (haystack.Length == 0) return 0;

    //Get longest prefix suffix(LPS)
    int[] lps = BuildLPSArray(needle);
    int i = 0; //haystack index
    int j = 0; //needle index

    while (i < haystack.Length)
    {
        if (haystack[i] == needle[j])
        {
            i++;
            j++;
        }
        if (j == needle.Length)
        {
            Console.WriteLine($" i={i} j={j} i-j ={i - j} ");
            return i - j;
        }
        else if (i < haystack.Length && haystack[i] != needle[j])
        {
            if (j != 0)
                j = lps[j - 1];
            else
                i++;
        }
    }
    return -1;
}

public int[] BuildLPSArray(string needle)
{
    int[] lps = new int[needle.Length];
    int length = 0, i = 1;

    while (i < needle.Length)
    {
        if (needle[i] == needle[length])
        {
            length++;
            lps[i] = length;
            i++;
        }
        else
        {
            if (length != 0)
            {
                length = lps[length - 1];
            }
            else
            {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}
StrStr("sadbutsad", "sad");
StrStr("sadbutsad", "but");
StrStr("leetcode", "leeto");