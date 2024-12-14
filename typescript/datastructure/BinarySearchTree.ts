class TreeNode<T> {
    public value: T;
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    public insert(value: T): void {
        let newTreeNode = new TreeNode(value);

        if (this.root == null)
            this.root = newTreeNode;
        else {
            this.insertNode(this.root, newTreeNode);
        }
    }
    private insertNode(currentTreeNode: TreeNode<T>, newTreeNode: TreeNode<T>) {

        if (currentTreeNode.value > newTreeNode.value) {
            if (currentTreeNode.left)
                this.insertNode(currentTreeNode.left, newTreeNode);
            else
                currentTreeNode.left = newTreeNode;
        } else {
            if (currentTreeNode.right)
                this.insertNode(currentTreeNode.right, newTreeNode);
            else
                currentTreeNode.right = newTreeNode;
        }
    }
    public preOrderTraversal(): T[] {
        let result: T[] = [];
        this.preOrderHelper(this.root, result);
        return result;
    }
    private preOrderHelper(treeNode: TreeNode<T> | null, result: T[]) {
        if (treeNode) {
            result.push(treeNode.value);
            this.preOrderHelper(treeNode.left, result);
            this.preOrderHelper(treeNode.right, result);
        }
    }
    public postOrderTraversal(): T[] {
        let result: T[] = [];
        this.postOrderHelper(this.root, result);
        return result;
    }
    private postOrderHelper(treeNode: TreeNode<T> | null, result: T[]) {
        if (treeNode) {
            this.postOrderHelper(treeNode.left, result);
            this.postOrderHelper(treeNode.right, result);
            result.push(treeNode.value);
        }
    }
    public inOrderTraversal(): T[] {
        let result: T[] = [];
        this.inOrderHelper(this.root, result);
        return result;
    }
    private inOrderHelper(treeNode: TreeNode<T> | null, result: T[]) {
        if (treeNode) {
            this.inOrderHelper(treeNode.left, result);
            result.push(treeNode.value);
            this.inOrderHelper(treeNode.right, result);
            
        }
    }
    public depthFirstSearch(): T[] {
        //depth first search can done using preorder, postorder, inorder
        return this.inOrderTraversal();
    }

    public breadthFirstSearch(): T[] {
        let result: T[] = [];
        if (this.root) {
            let queue: TreeNode<T>[] | null = [];
            queue.push(this.root);

            while (queue.length > 0) {
                let treeNode: TreeNode<T> = queue.shift();
                if (treeNode) {
                    result.push(treeNode.value);
                    if (treeNode.left)
                        queue.push(treeNode.left);
                    if (treeNode.right)
                        queue.push(treeNode.right);
                }
            }
        }

        return result;
    }
}

// Example usage: 
const bst = new BinarySearchTree<number>(); 
bst.insert(10); 
bst.insert(5); 
bst.insert(15); 
bst.insert(2); 
bst.insert(7); 
console.log("Preorder:", bst.preOrderTraversal()); // Output: [10, 5, 2, 7, 15] 
console.log("Inorder:", bst.inOrderTraversal()); // Output: [2, 5, 7, 10, 15] 
console.log("Postorder:", bst.postOrderTraversal()); // Output: [2, 7, 5, 15, 10] 
console.log("DFS:", bst.depthFirstSearch()); // Output: [2, 5, 7, 10, 15] 
console.log("BFS:", bst.breadthFirstSearch()); // Output: [10, 5, 15, 2, 7]