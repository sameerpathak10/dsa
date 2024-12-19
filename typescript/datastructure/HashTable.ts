class HashTable<K, V> {
    private table: Array<[K, V][]> = [];

    // Hash function to compute index for a key
    private hash(key: K): number {
        let hash = 0;
        const keyStr = key.toString();
        
        for (let i = 0; i < keyStr.length; i++) {
            //console.log(`key:${key} keyStr: ${keyStr} keyStr.charCodeAt(i);:${keyStr.charCodeAt(i)} hash:${hash} (hash << 5):${(hash << 5)}`);
            hash = (hash << 5) - hash + keyStr.charCodeAt(i);
            //console.log(`hash: ${hash}, hash & hash:${hash & hash}`);
            hash = hash & hash; // Convert to 32bit integer

        }
        return hash % 37; // Use a prime number for better distribution
    }

    // Set key-value pair in the hash table
    public set(key: K, value: V): void {
        const index = this.hash(key);
        console.log(`index:${index}`);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        console.log(`this.table[index].length:${this.table[index].length}`);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
    }

    // Get value by key from the hash table
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) return undefined;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return undefined;
    }

    // Remove key-value pair from the hash table
    public remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) return false;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    // Check if a key exists in the hash table
    public has(key: K): boolean {
        return this.get(key) !== undefined;
    }
}

// Example usage:
const hashTable = new HashTable<string, number>();
console.log(hashTable);
hashTable.set("one", 1);
hashTable.set("two", 2);
hashTable.set("three", 3);

console.log(hashTable.get("one")); // Output: 1
console.log(hashTable.get("four")); // Output: undefined
console.log(hashTable.has("two")); // Output: true
console.log(hashTable.has("four")); // Output: false

hashTable.remove("two");
console.log(hashTable.get("two")); // Output: undefined
console.log(hashTable.has("two")); // Output: false
