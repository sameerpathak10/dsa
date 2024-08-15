using System;
using System.Collections;

class Program {
    static void Main() {
        Hashtable myHashtable = new Hashtable();

        // Adding elements
        myHashtable.Add("txt", "notepad.exe");
        myHashtable.Add("bmp", "paint.exe");
        myHashtable.Add("rtf", "wordpad.exe");

        // Accessing elements
        Console.WriteLine("Value for key 'rtf': " + myHashtable["rtf"]);

        // Checking for keys and values
        Console.WriteLine("Contains key 'bmp': " + myHashtable.ContainsKey("bmp"));
        Console.WriteLine("Contains value 'paint.exe': " + myHashtable.ContainsValue("paint.exe"));

        // Iterating over keys and values
        Console.WriteLine("All keys and values:");
        foreach (DictionaryEntry entry in myHashtable) {
            Console.WriteLine("Key = {0}, Value = {1}", entry.Key, entry.Value);
        }

        // Removing an element
        myHashtable.Remove("bmp");

        // Clearing the hashtable
        myHashtable.Clear();
        Console.WriteLine("Count after clearing: " + myHashtable.Count);
    }
}