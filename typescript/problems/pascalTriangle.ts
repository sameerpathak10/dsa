/*
118. Pascal's Triangle
Easy
Topics
Companies
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
 */

function generate(numRows: number): number[][] {
    let result: number[][]=[];
    if(numRows>=1)
        result[0]=[1];
    for(let i =1; i< numRows;i++)
    {   
        let newArr:number[]=[];
        let previous: number[] = result[i-1];
        for(let j=0; j< previous.length-1;j++) {
            newArr.push(previous[j]+previous[j+1]);
        }
        //console.log(`newArr:${newArr}`);
        result.push([1,...newArr,1]);
    }

    return result;
};
console.log(generate(5));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));