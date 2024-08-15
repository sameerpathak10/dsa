using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        LinkedList<int> myLinkedList = new LinkedList<int>();

        // Adding elements
        myLinkedList.AddFirst(1);
        myLinkedList.AddLast(3);
        myLinkedList.AddAfter(myLinkedList.First, 2);

        // Accessing elements
        Console.WriteLine("First element: " + myLinkedList.First.Value);
        Console.WriteLine("Last element: " + myLinkedList.Last.Value);

        // Iterating over elements
        Console.WriteLine("All elements:");
        foreach (var item in myLinkedList) {
            Console.WriteLine(item);
        }

        // Removing elements
        myLinkedList.Remove(2);
        myLinkedList.RemoveFirst();
        myLinkedList.RemoveLast();

        Console.WriteLine("Count after removals: " + myLinkedList.Count);
    }
}
