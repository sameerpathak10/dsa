/*
383. Ransom Note
Easy
Topics
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const s1 = ransomNote.split("");
    const s2 = magazine.split("").filter((item) => s1.includes(item));
    console.log(`s1=${s1}  s2=${s2}`);
    let hashSet: Map<number, string> = new Map();
    let i: number = 0;
    s1.forEach((char,index) => {
         if(s2.includes(char) && !hashSet.has(index)){
            hashSet.set(index,char);
            s2.splice(s2.indexOf(char),1);
            console.log(`s2=${s2}`);
            i++;
         }
    });
    console.log(hashSet);
    if (i >= s1.length)
        return true;
    else
        return false;

};

function canConstruct2(ransomeNote: string,magzine: string): boolean {
    let charCount : Map<string,number> = new Map();

    for(let char of magzine){
        charCount.set(char, (charCount.get(char)||0)+1);
    }
    console.log(charCount);
    for(let char of ransomeNote){
        if(!charCount.has(char) || charCount.get(char) !==0)
            return false;
        charCount.set(char,charCount.get(char)!-1);
    }
    return true;
};
console.log(`result=${canConstruct2("aab", "ab")}`);
console.log(`result=${canConstruct2("bgg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")}`);
//console.log(`result=${canConstruct2("aab", "baaa")}`);
