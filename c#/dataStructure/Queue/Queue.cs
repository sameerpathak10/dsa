using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Queue<string> myQueue = new Queue<string>();

        // Adding elements
        myQueue.Enqueue("First");
        myQueue.Enqueue("Second");
        myQueue.Enqueue("Third");

        // Accessing elements
        Console.WriteLine("First element: " + myQueue.Peek());

        // Removing elements
        Console.WriteLine("Dequeued element: " + myQueue.Dequeue());

        // Checking for existence
        Console.WriteLine("Contains 'First': " + myQueue.Contains("First"));

        // Iterating over elements
        Console.WriteLine("All elements in queue:");
        foreach (var item in myQueue) {
            Console.WriteLine(item);
        }

        // Clearing the queue
        myQueue.Clear();
        Console.WriteLine("Count after clearing: " + myQueue.Count);
    }
}