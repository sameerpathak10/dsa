/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

public int RomanToInt(string s)
{
    char[] words = s.ToCharArray();

    Dictionary<char, int> dt = new Dictionary<char, int>();
    dt.Add('I', 1);
    dt.Add('V', 5);
    dt.Add('X', 10);
    dt.Add('L', 50);
    dt.Add('C', 100);
    dt.Add('D', 500);
    dt.Add('M', 1000);
    int value = 0;
    for (int i = words.Length - 1; i > -1; i--)
    {
        /* I can be placed before V (5) and X (10) to make 4 and 9. 
         X can be placed before L (50) and C (100) to make 40 and 90. 
         C can be placed before D (500) and M (1000) to make 400 and 900.
         Given a roman numeral, convert it to an integer.*/

        value = value + dt[words[i]];
        if (i > 0)
        {
            if ((words[i] == 'X' || words[i] == 'V') && words[i - 1] == 'I')
            {
                value -= 1;
                i--;
            }
            else if ((words[i] == 'L' || words[i] == 'C') && words[i - 1] == 'X')
            {
                value -= 10;
                i--;
            }
            else if ((words[i] == 'D' || words[i] == 'M') && words[i - 1] == 'C')
            {
                value -= 100;
                i--;
            }
        }
    }
    Console.WriteLine($"Value = {value}");
    return value;

}



//### Alternate Approach


public int RomanToInt2(string s)
{
    Dictionary<char, int> romanValues = new Dictionary<char, int>
    {
        {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},
        {'C', 100}, {'D', 500}, {'M', 1000}
    };

    int total = 0;
    for (int i = 0; i < s.Length; i++)
    {
        // If the current value is less than the next value, subtract it
        if (i < s.Length - 1 && romanValues[s[i]] < romanValues[s[i + 1]])
        {
            total -= romanValues[s[i]];
        }
        else
        {
            // Otherwise, add it
            total += romanValues[s[i]];
        }
    }

    return total;
}

// Example usage
Console.WriteLine(RomanToInt("III")); // Output: 3
Console.WriteLine(RomanToInt("MCMXCIV")); // Output: 1994
Console.WriteLine(RomanToInt("LVIII")); // Output: 58
/*
### Explanation

1. **Dictionary Setup**: A dictionary is used to map Roman numeral characters to their integer values.
2. **Iteration**: Iterate through the string from left to right.
3. **Comparison**: For each character, check if it is less than the next character. If it is, subtract its value from the total. Otherwise, add its value to the total.

### Time and Space Complexity

- **Time Complexity**: O(n), where n is the length of the input string. This is because we iterate through the string once.
- **Space Complexity**: O(1), as the dictionary size is constant and does not depend on the input size.
*/

RomanToInt("III");
RomanToInt("MCMXCIV");
RomanToInt("LVIII");
