/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?*/

function isSubsequence(s: string, t: string): boolean {
    let i: number = 0, j: number = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j])
            i++;
        j++;
    }
    if (i >= s.length)
        return true;
    else
        return false;
}


function isSubsequence2(s: string, t: string): boolean {

    console.log(`s=${s}  t=${t}`);
    const s1 = s.split("");
    const s2 = t.split("").filter((item) => s1.includes(item));
    console.log(`s1=${s1}  s2=${s2}`);
    for(let i=0; i<s2.length;i++){
        if(s1[i]!==s2[i])
            s2.splice(i,1);
    }
    console.log(`splice  s2=${s2}`);
    return s1.every((char,index)=>{
        if(s2.includes(char) && (s2.indexOf(char)===index || s2.join("").includes(s))){
            return true;
        }
        return false;
    });
}


console.log(`result:${isSubsequence2("abc", "ahbgdc")}`);
console.log(`result:${isSubsequence2("axc", "ahbgdc")}`);