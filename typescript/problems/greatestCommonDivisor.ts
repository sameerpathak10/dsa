function gcd(str1Len: number, str2Len: number): number {
    if (str2Len === 0) return str1Len;
    let gcdLength = gcd(str2Len, str1Len % str2Len);
    console.log(`gcdLength:${gcdLength} str2Len:${str2Len} str1Len:${str1Len} str1Len%str2Len:${str1Len % str2Len} `);
    return gcdLength;
}
function gcdOfStrings(str1: string, str2: string): string {


    if (str1 + str2 !== str2 + str1)
        return '';
    let gcdLength = gcd(str1.length, str2.length);
    console.log(`-->gcd:${str1.substring(0, gcdLength)}`);
    return str1.substring(0, gcdLength);
};

gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX");
gcdOfStrings("ABCABC", "ABC");
gcdOfStrings("ABABAB", "ABAB");