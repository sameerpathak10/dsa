/**
 * @param {number} n
 * @return {string}
 */


function countAndSay(n: number): string {
    if (n === 1)
        return "1";
    return countNumber(countAndSay(n - 1));
}

function countNumber(str: string): string {
    let prev: string = "";
    let count: number = 0;
    let ans: string = "";
    for (let x of str) {
        if (x == prev)
            count++;
        else {
            if (prev !== "")
                ans += count + prev;
            prev = x;
            count = 1;
        }
    }
    ans += count + prev;
    return ans;
}


console.log(countAndSay(4));
