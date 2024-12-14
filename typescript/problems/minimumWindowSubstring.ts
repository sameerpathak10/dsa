/*
Minimum Window Substring
Attempted
Hard
Topics
Companies
Hint
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

function minWindow(s: string, t: string): string {
    let m = s.length, n = t.length;
    if (m == 0 || n == 0)
        return '';

    let tFreq: Map<string, number> = new Map<string, number>(), windowFreq: Map<string, number> = new Map<string, number>();

    // Get frequency map of t
    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }
    let have = 0, need = tFreq.size, minLength = Infinity;
    let start = 0, end = 0, minWindowStart = 0;

    while (end < m) {
        let charEnd = s[end];
        windowFreq.set(charEnd, (windowFreq.get(charEnd) || 0) + 1);
        if (tFreq.has(charEnd) && windowFreq.get(charEnd) == tFreq.get(charEnd))
            have++;
        windowFreq.forEach((v, k)=> console.log(`windowFreq char: ${k} count:${v}`));
        tFreq.forEach((v, k)=> console.log(`tFreq char: ${k} count:${v}`));
        while (have == need) {
           
            if ((end - start + 1) < minLength) {
                minLength = end - start + 1;
                minWindowStart = start;
            }
            let charStart = s[start];
            windowFreq.set(charStart, windowFreq.get(charStart) - 1);
            windowFreq.forEach((v, k)=> console.log(`-->windowFreq char: ${k} count:${v}`));
            console.log(`start : ${start} end: ${end} minLength:${minLength} charEnd: ${charEnd} charStart: ${charStart}`)
            if (tFreq.has(charStart) && windowFreq.get(charStart) < tFreq.get(charStart))
                have--;
            start++;
        }
        end++;
    }
    if (minLength == Infinity)
        return '';
    else {
        console.log(`minWindowStart: ${minWindowStart} minLength: ${minLength} result: ${s.substring(minWindowStart, minWindowStart + minLength)}`);
        return s.substring(minWindowStart, minWindowStart + minLength);
    }
};

minWindow('ADOBECODEBANC', 'ABC');
minWindow('aa', 'aa');

function minWindow2(s: string, t: string): string {
    const need: number[] = new Array(128).fill(0);
    const window: number[] = new Array(128).fill(0);
    for (const c of t) {
        ++need[c.charCodeAt(0)];
    }
    let cnt = 0;
    let j = 0;
    let k = -1;
    let mi = 1 << 30;
    for (let i = 0; i < s.length; ++i) {
        ++window[s.charCodeAt(i)];
        if (need[s.charCodeAt(i)] >= window[s.charCodeAt(i)]) {
            ++cnt;
        }
        while (cnt === t.length) {
            if (i - j + 1 < mi) {
                mi = i - j + 1;
                k = j;
            }
            if (need[s.charCodeAt(j)] >= window[s.charCodeAt(j)]) {
                --cnt;
            }
            --window[s.charCodeAt(j++)];
        }
    }
    return k < 0 ? '' : s.slice(k, k + mi);
    
};