/*Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

 

Example 1:


Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
Example 2:

Input: preorder = [1,3]
Output: [1,null,3]
 

Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 1000
All the values of preorder are unique.*/



//* Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function bstFromPreorder(preorder: number[]): TreeNode | null {
    if (preorder.length == 0)
        return null;
    let rootNode: TreeNode | null = new TreeNode(preorder[0]);;

    function insertNode(parentNode: TreeNode, newNode: TreeNode) {
        if (parentNode.val > newNode.val) {
            if (parentNode.left == null)
                parentNode.left = newNode;
            else
                insertNode(parentNode.left, newNode);
        }
        else {
            if (parentNode.right == null)
                parentNode.right = newNode;
            else
                insertNode(parentNode.right, newNode);
        }
    }
    for (let i = 1; i < preorder.length; i++) {
        let newNode: TreeNode = new TreeNode(preorder[i]);
        insertNode(rootNode, newNode);
    }
    return rootNode;
}

const preorder1 = [8, 5, 1, 7, 10, 12]; const tree1 = bstFromPreorder(preorder1); console.log(tree1); 
const preorder2 = [1, 3]; const tree2 = bstFromPreorder(preorder2); console.log(tree2);


