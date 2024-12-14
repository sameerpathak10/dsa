class _Node<T> {    
    public next: _Node<T> | null = null;
    public constructor(public value: T,) {       
    }
}

class LinkedList<T> {
    private head: _Node<T> | null = null;
    private size: number = 0;

    append(value: T): void {
        let newNode = new _Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }
    prepend(value: T): void {
        let newNode = new _Node(value);

        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size++;
    }
    remove(value: T): void {
        if (this.size == 0) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        } else {

            let currentNode = this.head;

            while (currentNode.next !== null && currentNode.next.value !== value) {
                currentNode = currentNode.next;
            }
            if (currentNode.next !== null) {
                currentNode.next = currentNode.next.next;
                this.size--;
            }
        }

    }
    print(): void {
        let currentNode = this.head;
        while (currentNode) {
            console.log(`${currentNode.value}-->`);        
            currentNode = currentNode.next;
        }
    }
    search(value: T): _Node<T> | null {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                console.log('found');
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    getZize(): number {
        return this.size;
    }
}


const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(8);
linkedList.append(9);
linkedList.append(7);
linkedList.print();
console.log(linkedList.getZize());

linkedList.remove(8);

linkedList.print();

