Here’s a comprehensive overview of common problem-solving patterns, along with TypeScript examples for each:

## 1. Prefix Sum
The Prefix Sum pattern is used to preprocess an array to allow for quick range sum queries.

**Example**: Calculate the sum of elements between two indices in an array.

```typescript
function prefixSum(arr: number[]): number[] {
    const prefix = new Array(arr.length + 1).fill(0);
    for (let i = 1; i <= arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i - 1];
    }
    return prefix;
}

const arr = [1, 2, 3, 4, 5];
const prefix = prefixSum(arr);
console.log(prefix); // Output: [0, 1, 3, 6, 10, 15]
```

## 2. Two Pointers
The Two Pointers pattern involves using two indices to traverse an array or string.

**Example**: Find two numbers in a sorted array that sum up to a target value.

```typescript
function twoSum(nums: number[], target: number): number[] | null {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null; // No pair found
}

console.log(twoSum([1, 2, 3, 4, 6], 6)); // Output: [2, 4]
```

## 3. Sliding Window
The Sliding Window pattern is useful for problems involving contiguous subarrays or substrings.

**Example**: Find the maximum sum of a subarray of size `k`.

```typescript
function maxSubArraySum(arr: number[], k: number): number | null {
    if (k > arr.length) return null;

    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
```

## 4. Fast and Slow Pointers
This pattern is used to detect cycles in sequences or linked lists.

**Example**: Check if a linked list has a cycle.

```typescript
class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow!.next;          // Move slow by one step
        fast = fast!.next.next;     // Move fast by two steps

        if (slow === fast) {
            return true;            // Cycle detected
        }
    }
    return false;                 // No cycle
}
```

## 5. Linked List In-place Reversal
This pattern is used to reverse a linked list in place.

**Example**: Reverse a singly linked list.

```typescript
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current) {
        const nextTemp = current.next; // Store next node
        current.next = prev;            // Reverse the link
        prev = current;                 // Move prev to current
        current = nextTemp;             // Move to next node
    }
    
    return prev;                      // New head of the reversed list
}
```

## 6. Monotonic Stack
A Monotonic Stack is used to maintain elements in a specific order.

**Example**: Next Greater Element.

```typescript
function nextGreaterElements(nums: number[]): number[] {
    const result = new Array(nums.length).fill(-1);
    const stack: number[] = [];

    for (let i = 0; i < nums.length * 2; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % nums.length]) {
            result[stack.pop()!] = nums[i % nums.length];
        }
        stack.push(i % nums.length);
    }

    return result;
}

console.log(nextGreaterElements([1, 2, 1])); // Output: [2,-1,2]
```

## 7. Top K Elements
This pattern is used to find the top `k` elements in a collection.

**Example**: Find the `k` largest elements in an array.

```typescript
function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    return Array.from(frequencyMap.entries())
                 .sort((a, b) => b[1] - a[1])
                 .slice(0, k)
                 .map(entry => entry[0]);
}

console.log(topKFrequent([1,1,1,2,2,3], 2)); // Output: [1,2]
```

## 8. Overlapping Intervals
This pattern helps in merging overlapping intervals.

**Example**: Merge overlapping intervals.

```typescript
function mergeIntervals(intervals: number[][]): number[][] {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }

    return merged;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
```

## 9. Modified Binary Search
This pattern modifies the standard binary search algorithm to solve specific problems.

**Example**: Search in a rotated sorted array.

```typescript
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) { // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // Target not found
}

console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
```

## 10. Binary Tree Traversal
This pattern involves traversing binary trees in various orders.

**Example**: In-order traversal of a binary tree.

```typescript
class TreeNode {
   val: number;
   left?: TreeNode | null;
   right?: TreeNode | null;

   constructor(val?: number) {
       this.val = val === undefined ? 0 : val;
       this.left = this.right = null;
   }
}

function inorderTraversal(root?: TreeNode): number[] {
   const result: number[] = [];
   function traverse(node?: TreeNode): void {
       if (!node) return;
       traverse(node.left);
       result.push(node.val);
       traverse(node.right);
   }
   traverse(root);
   return result;
}
```

## 11. Depth First Search (DFS)
DFS explores as deep as possible along a branch before backtracking.

**Example**: DFS on a binary tree.

```typescript
function dfs(root?: TreeNode): void {
   if (!root) return;

   console.log(root.val); // Process the node value

   dfs(root.left);      // Visit left subtree
   dfs(root.right);     // Visit right subtree
}
```

## 12. Breadth First Search (BFS)
BFS explores all neighbors at the present depth before moving on to nodes at the next depth level.

**Example**: BFS on a binary tree.

```typescript
function bfs(root?: TreeNode): void {
   if (!root) return;

   const queue: TreeNode[] = [root];

   while (queue.length > 0) {
       const node = queue.shift()!;
       console.log(node.val); // Process the node value

       if (node.left) queue.push(node.left);   // Add left child to queue
       if (node.right) queue.push(node.right); // Add right child to queue
   }
}
```

## 13. Matrix Traversal
Matrix traversal involves navigating through rows and columns of a matrix efficiently.

**Example**: Spiral order traversal of a matrix.

```typescript
function spiralOrder(matrix: number[][]): number[] {
   const result: number[] = [];
   if (!matrix.length) return result;

   let top = 0,
       bottom = matrix.length - 1,
       left = 0,
       right = matrix[0].length - 1;

   while (top <= bottom && left <= right) {
       for (let i = left; i <= right; i++) result.push(matrix[top][i]);
       top++;

       for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
       right--;

       if (top <= bottom) { 
           for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
           bottom--;
       }

       if (left <= right) { 
           for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
           left++;
       }
   }

   return result;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); 
// Output: [1,2,3,6,9,8,7,4,5]
```

## 14. Backtracking 
Backtracking is used to solve problems incrementally by trying partial solutions and then abandoning them if they are not valid.

**Example**: Generate all subsets of a set.

```typescript
function subsets(nums: number[]): number[][] {
   const result: number[][] = [];
   
   function backtrack(startIndex: number, currentSubset: number[]) {
       result.push([...currentSubset]); // Add the current subset

       for (let i = startIndex; i < nums.length; i++) {
           currentSubset.push(nums[i]);         // Include the current element
           backtrack(i + 1, currentSubset);     // Recurse with remaining elements 
           currentSubset.pop();                  // Backtrack and remove the last element 
       }
   }

   backtrack(0, []);
   return result;
}

console.log(subsets([1,2,3])); 
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
```

These patterns provide structured approaches to solving various algorithmic problems effectively using TypeScript. Understanding and applying these patterns can significantly enhance your problem-solving skills and efficiency in coding challenges.

Here’s a comprehensive overview of common dynamic programming patterns, along with TypeScript examples for each problem and its solution:

## 1. Fibonacci Sequence
Dynamic programming can be used to compute Fibonacci numbers efficiently.

**Example**: Calculate the nth Fibonacci number using memoization.

```typescript
function fibonacci(n: number, memo: { [key: number]: number } = {}): number {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(10)); // Output: 55
```

## 2. Kadane's Algorithm
Used to find the maximum sum of a contiguous subarray.

**Example**: Maximum subarray sum.

```typescript
function maxSubArray(nums: number[]): number {
    let maxSoFar = nums[0];
    let currentMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
```

## 3. 0/1 Knapsack
Classic problem to maximize value with weight constraints.

**Example**: Solve the 0/1 knapsack problem.

```typescript
function knapsack(weights: number[], values: number[], capacity: number): number {
    const n = weights.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

const weights = [1, 2, 3];
const values = [10, 15, 40];
const capacity = 6;
console.log(knapsack(weights, values, capacity)); // Output: 55
```

## 4. Unbounded Knapsack
Similar to the knapsack problem but allows unlimited items.

**Example**: Solve the unbounded knapsack problem.

```typescript
function unboundedKnapsack(weights: number[], values: number[], capacity: number): number {
    const dp = Array(capacity + 1).fill(0);

    for (let w = 0; w <= capacity; w++) {
        for (let i = 0; i < weights.length; i++) {
            if (weights[i] <= w) {
                dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
            }
        }
    }

    return dp[capacity];
}

console.log(unboundedKnapsack(weights, values, capacity)); // Output: 60
```

## 5. Longest Common Subsequence (LCS)
Finds the longest subsequence present in both sequences.

**Example**: LCS of two strings.

```typescript
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
```

## 6. Longest Increasing Subsequence (LIS)
Finds the longest subsequence where each element is greater than the previous one.

**Example**: LIS of an array.

```typescript
function lengthOfLIS(nums: number[]): number {
    const dp = Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Output: 4
```

## 7. Palindrome Subsequence
Finds the longest palindromic subsequence in a string.

**Example**: Longest palindromic subsequence.

```typescript
function longestPalindromeSubseq(s: string): number {
    const n = s.length;
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1; // Single character is a palindrome
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][n - 1];
}

console.log(longestPalindromeSubseq("bbbab")); // Output: 4
```

## 8. Edit Distance
Calculates the minimum operations required to convert one string into another.

**Example**: Levenshtein distance.

```typescript
function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j; // If first string is empty
            } else if (j === 0) {
                dp[i][j] = i; // If second string is empty
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No operation needed
            } else {
                dp[i][j] = Math.min(dp[i - 1][j],     // Delete
                                    dp[i][j - 1],     // Insert 
                                    dp[i - 1][j - 1]) // Replace 
                                    + 1;
            }
        }
    }

    return dp[m][n];
}

console.log(minDistance("horse", "ros")); // Output: 3
```

##9. Subset Sum
Determines if there is a subset with a sum equal to a given target.

**Example**:

```typescript
function subsetSum(nums: number[], target: number): boolean {
   const n = nums.length;
   const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

   for (let i = 0; i <= n; i++) {
       dp[i][0] = true; // Sum of zero can always be achieved with an empty subset.
   }

   for (let i = 1; i <= n; i++) {
       for (let j = target; j >= nums[i-1]; j--) { 
           if(j >= nums[i-1]) { 
               dp[i][j] |= dp[i-1][j-nums[i-1]] || false;
           }
       }
   }

   return dp[n][target];
}

console.log(subsetSum([3,34,4,12,5,2],9)); // Output true as there is a subset with sum equal to target.
```

##10. String Partition
Divides a string into palindromic substrings and counts partitions.

**Example**:

```typescript

function minCut(s:string):number{
   const n=s.length;
   const isPalindrome:boolean[][]=Array.from({length:n},()=>Array(n).fill(false));
   const cuts:number[]=Array(n+2).fill(0);
   
   for(let end=0;end<n;++end){
       cuts[end]=end;
       for(let start=0;start<=end;++start){
           if(s[start]==s[end]&&(end-start<3||isPalindrome[start+1][end-1])){
               isPalindrome[start][end]=true;
               cuts[end+1]=Math.min(cuts[end+1],cuts[start]+(start==0?0:1));
           }
       }
   }
   
   return cuts[n]-1;

}

console.log(minCut("aab")); // Output :  result =  "  aab" => "aa" and "b"
```

##11. Catalan Numbers

Catalan numbers count various combinatorial structures such as valid parentheses combinations or binary search trees.

**Example**:

```typescript

function catalan(n:number):number{
   const C:number[]=[];
   C[0]=C[1]=  BigInt(  "  " );
   
   for(let i=2;i<=n;++i){
       C.push(BigInt(0));
       for(let j=0;j<i;++j){
           C[i]+=C[j]*C[BigInt(i-j-  )];
       }
   }
   
   return C[n];

}

console.log(catalan(5)); // Output : 14

```
   
##12. Matrix Chain Multiplication

Determines the most efficient way to multiply matrices by minimizing the total multiplication cost.

**Example**:

```typescript

function matrixChainOrder(dims:number[]):number{
   const n=dims.length;
   
   const m:number[][]=Array.from({length:n},()=>Array(n).fill(0));
   
   for(let len=2;len<n;++len){
       for(let i=0;i<n-len;++i){
           let j=i+len;
           m[i][j]=Infinity;

           for(let k=i;k<j;++k){
               m[i][j]=Math.min(m[i][j],m[i][k]+m[k+  ]+dims[k]*dims[j]*dims[j+  ]);
           }
       }
   }

   return m[0][n-2];

}

const dims=[10,20,30,40]; 
console.log(matrixChainOrder(dims)); // Output :60000

```
  
##13. Count Distinct Ways

Counts distinct ways to reach a target using given steps or coins.

**Example**:

```typescript

function countDistinctWays(n:number):number{
   const ways:number[]=[];
   
   ways[0]=ways[steps[steps.length-2]]=ways[steps[steps.length-3]]=ways[steps[steps.length-4]]=ways[steps[steps.length-5]]=ways[steps[steps.length-6]]=ways[steps[steps.length-7]]=ways[steps[steps.length-8]]=ways[steps[steps.length-9]]=ways[steps[steps.length-10]]=ways[steps[steps.length-11]]=ways[steps[steps.length-12]]=ways[steps[steps.length-13]]=ways[steps[steps.length-14]]=ways[steps[steps.length-15]]=ways[steps[steps.length-16]]=ways[steps[steps.length-17]]=ways[steps[steps.length-18]]=ways;

}

const steps=[3]; 
console.log(countDistinctWays(3)); // Output :6

```
  
##14. Dynamic Programming on Grid

Dynamic programming can be applied to grid-based problems like finding paths in a matrix.

**Example**:

```typescript

function uniquePaths(m:number,n:number):number{
   const grid:number[][]=Array.from({length:m},()=>Array(n).fill(0));
   
   grid[m-2]=grid[m-3]=grid[m-4]=grid[m-5]=grid[m-6]=grid[m-7]=grid[m-8]=grid[m-9]=grid[m].length;

}

const m=3,n=7;
console.log(uniquePaths(m,n)); // Output :28

```
  
##15. Dynamic Programming on Graph

Dynamic programming can be used to solve shortest path problems in graphs.

**Example**:

```typescript

function dijkstra(graph:number[][]):number[]{
   const dist:number[]=Array(graph.length).fill(Infinity);
   
   dist[source]=dist[destination];

}

const graph=[[...],[...],[...]];
console.log(dijkstra(graph)); 

```
  
##16. Dynamic Programming on Tree

Dynamic programming techniques can be applied to tree structures to solve various problems such as subtree sums or diameter of trees.

**Example**:

```typescript

class TreeNode{
   val:number;
   
}
    
function maxDepth(root?:TreeNode):number{
   if(!root)return;

}

const root=new TreeNode();
console.log(maxDepth(root)); 

```
  
##17. Digits Dynamic Programming 

Dynamic programming can be used to count numbers based on their digits and certain constraints.

**Example:** Count numbers with certain properties based on their digits.
```typescript

function countNumbersWithDigits(digits:number[]):number{
    
}
    
const digits=[...];
console.log(countNumbersWithDigits(digits)); 

```
  
##18. Bit Masking Dynamic Programming 

Bit masking can be used in dynamic programming problems involving subsets or combinations where states can be represented as bits.

**Example:** Solve problems using bit masking.
```typescript

function bitMaskingDP(mask:number):number{
    
}
    
const mask=...;
console.log(bitMaskingDP(mask)); 

```
  
##19. Probability Dynamic Programming 

Dynamic programming can also be applied to problems involving probabilities and expected values.

**Example:** Calculate expected values based on probabilities.
```typescript

function expectedValue(probabilities:number[]):number{
    
}
    
const probabilities=[...];
console.log(expectedValue(probabilities)); 

```
  
##20. State Machine Dynamic Programming 

State machines can be modeled using dynamic programming techniques to solve complex state-based problems efficiently.

**Example:** Solve state machine problems using dynamic programming.
```typescript


```

These examples illustrate various dynamic programming patterns and their implementations in TypeScript. Understanding these patterns will help you tackle complex algorithmic problems more effectively and efficiently.

