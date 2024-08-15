sing System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Dictionary<int, string> dict = new Dictionary<int, string>();

        // Adding elements
        dict.Add(1, "One");
        dict.Add(2, "Two");
        dict.Add(3, "Three");

        // Accessing elements
        Console.WriteLine("Value for key 2: " + dict[2]);

        // Checking for keys and values
        Console.WriteLine("Contains key 3: " + dict.ContainsKey(3));
        Console.WriteLine("Contains value 'Two': " + dict.ContainsValue("Two"));

        // Iterating over keys and values
        Console.WriteLine("All keys:");
        foreach (int key in dict.Keys) {
            Console.WriteLine(key);
        }

        Console.WriteLine("All values:");
        foreach (string value in dict.Values) {
            Console.WriteLine(value);
        }

        // Removing an element
        dict.Remove(2);

        // Trying to get a value
        if (dict.TryGetValue(3, out string val)) {
            Console.WriteLine("Value for key 3: " + val);
        }

        // Clearing the dictionary
        dict.Clear();
        Console.WriteLine("Count after clearing: " + dict.Count);
    }
}