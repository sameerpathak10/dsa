function kmpStringSearch(long: string, pattern: string): number {
    // Initialize a counter to keep track of the number of occurrences of pattern in long
    let count = 0;

    // Calculate the prefix table for the pattern
    const prefixTable = computePrefixTable(pattern);

    // Initialize the variables for the main loop
    let i = 0;
    let j = 0;

    // Main loop: continue until we have reached the end of the long string
    while (i < long.length) {
        // If the characters at the current indices in long and pattern match, move to the next character in both strings
        if (long[i] === pattern[j]) {
            i++;
            j++;
        }

        // If we have reached the end of the pattern, increment the counter and reset the pattern index to the value in the prefix table
        if (j === pattern.length) {
            count++;
            j = prefixTable[j - 1];
        }
        // If the characters do not match, reset the pattern index to the value in the prefix table
        else if (i < long.length && long[i] !== pattern[j]) {
            if (j !== 0) {
                j = prefixTable[j - 1];
            }
            // If the pattern index is already 0, move to the next character in the long string
            else {
                i++;
            }
        }
    }

    // Return the final count
    return count;
}

// Helper function to compute the prefix table for the KMP algorithm
function computePrefixTable(pattern: string): number[] {
    const prefixTable = [0];
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[j]) {
            prefixTable[i] = j + 1;
            j++;
        } else {
            while (j > 0 && pattern[i] !== pattern[j]) {
                j = prefixTable[j - 1];
            }
            if (pattern[i] === pattern[j]) {
                prefixTable[i] = j + 1;
                j++;
            } else {
                prefixTable[i] = 0;
            }
        }
    }
    console.log(prefixTable);
    return prefixTable;
}

console.log(kmpStringSearch('abcabcaabcabcdaabbc','aabac'));