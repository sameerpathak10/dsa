class Treenode{
    private value: number;
    private left:Treenode|null;
    private right:Treenode| null;

    constructor(value?:number, left?:Treenode| null, right?:Treenode | null){
        this.value = (value === undefined ?0 : null);
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

class BTree{


    function insertNode(previousNode)
}