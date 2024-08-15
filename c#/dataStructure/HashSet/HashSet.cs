using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        HashSet<int> myHashSet = new HashSet<int> { 1, 2, 3, 4, 5 };

        // Adding elements
        myHashSet.Add(6);

        // Checking for existence
        Console.WriteLine("Contains 3: " + myHashSet.Contains(3));

        // Removing an element
        myHashSet.Remove(2);

        // Iterating over elements
        Console.WriteLine("Elements in HashSet:");
        foreach (var item in myHashSet) {
            Console.WriteLine(item);
        }

        // Union with another set
        HashSet<int> otherSet = new HashSet<int> { 4, 5, 6, 7, 8 };
        myHashSet.UnionWith(otherSet);
        Console.WriteLine("After UnionWith:");
        foreach (var item in myHashSet) {
            Console.WriteLine(item);
        }
    }
}
