/**
 * 
 *
Solved
Easy
Topics
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

 */
function isIsomorphic(s: string, t: string): boolean {
    let hashMap = new Map();
    let hashMap2 = new Map();

    if (s.length !== t.length)
        return false;

    let x = s.split('');
    let y = t.split('');

    for (let i = 0; i < x.length; i++) {
        if (hashMap.has(x[i]) || hashMap2.has(y[i])) {
            if (hashMap.get(x[i]) !== y[i] || hashMap2.get(y[i]) !== x[i])
                return false;
        } else {
            hashMap.set(x[i], y[i]);
            hashMap2.set(y[i], x[i]);
        }
    }
    return true;
};