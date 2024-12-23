function isPalindrome(x: number): boolean {
    if (x < 0 )
        return false
    let y: number = x;
    let reverse: number = 0;
    while (y > 0) {
        reverse = reverse * 10 + Math.floor(y % 10);
        y = Math.floor(y / 10);
    }
    return x === reverse;
}