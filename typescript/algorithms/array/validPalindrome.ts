/*
Valid Palindrome
Easy
Topics
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

function isPalindrome2(s: string): boolean {

  

  let normalized: string = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let left: number = 0;
  let right: number = normalized.length - 1;
  while (left <= right) {
   /* if (!isLetterOrDigit(s.charAt(left)))
      left++;
    else if (!isLetterOrDigit(s.charAt(right)))
      right--;
    if (s[left]?.toLowerCase() !== s[right]?.toLowerCase())
      return false;*/
    if (normalized[left] !== normalized[right])
      return false;
    left++;
    right--;
  }
  return true;
};

function isLetterOrDigit(ch: string) :boolean{
  console.log(`char: ${ch}`);
   if(ch.replace(/[^a-zA-Z0-9]/g, '').length==0)
    return false;
  return true;

}
function isPalindrome(s: string): boolean {
  let normalized: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left: number =0;
  let right: number = normalized.length-1;
  while(left<=right) {
    if (normalized[left] !== normalized[right])
      return false;
    left++;
    right--;
  }
  return true;
};
console.log(`result = ${isPalindrome("0P")}`);
console.log(`result = ${isPalindrome("aa")}`);
console.log(`result = ${isPalindrome("A man, a plan, a canal: Panama")}`);