function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    if (!matrix.length) return result;

    for(let i=0; i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            result.push(matrix[i][j]);
        }
    }
    console.log(`result:${result}`);
    return result;
}
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
