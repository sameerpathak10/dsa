using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Stack<string> myStack = new Stack<string>();

        // Adding elements
        myStack.Push("First");
        myStack.Push("Second");
        myStack.Push("Third");

        // Accessing elements
        Console.WriteLine("Top element: " + myStack.Peek());

        // Removing elements
        Console.WriteLine("Popped element: " + myStack.Pop());

        // Checking for existence
        Console.WriteLine("Contains 'First': " + myStack.Contains("First"));

        // Iterating over elements
        Console.WriteLine("All elements in stack:");
        foreach (var item in myStack) {
            Console.WriteLine(item);
        }

        // Clearing the stack
        myStack.Clear();
        Console.WriteLine("Count after clearing: " + myStack.Count);
    }
}