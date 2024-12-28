/** 387. First Unique Character in a String
Solved
Easy
Topics
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.*/


function firstUniqChar(s: string): number {
    let map = new Map();
    for (let char of s) {
        if (map.has(char))
            map.set(char, map.get(char) + 1);
        else
            map.set(char, 1);
    }
    for (let [key, val] of map.entries()) {
        if (val == 1)
            return s.indexOf(key);
    }
    return -1;
};
function firstUniqChar2(inputStr: string): number {

    let firstUniqChar = Infinity;
    console.log(` 'a'.charCodeAt(0):${'a'.charCodeAt(0)}  'a'.charCodeAt(1):${'a'.charCodeAt(1)}`);
    for (let charCode = 'a'.charCodeAt(0); charCode < 'z'.charCodeAt(0); charCode++) {

        const currChar = String.fromCharCode(charCode);

        if (inputStr.includes(currChar)) {
            if (inputStr.indexOf(currChar) == inputStr.lastIndexOf(currChar)) {
                firstUniqChar = Math.min(firstUniqChar, inputStr.indexOf(currChar));
            }
        }
    }

    return firstUniqChar == Infinity ? -1 : firstUniqChar;
}

console.log(firstUniqChar2("loveleetcode"));