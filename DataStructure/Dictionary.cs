using System;
using System.Collections.Generic;

namespace Algorithms{

    public class DictionaryDS{

        public void CreateDictionary(){

            Dictionary<int,string> dict = new Dictionary<int, string>();


            dict.Add(1,"First");
            dict.Add(2,"Second");
            dict.Add(3,"Third");

            Console.WriteLine(dict.ContainsValue("First"));
            Console.WriteLine(dict.ContainsKey(1));
            Console.WriteLine(dict.Count);

            string value;
            if(dict.TryGetValue(2, out value))
                Console.WriteLine(value);
        }

    }

}