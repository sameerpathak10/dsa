using System;
using System.Collections.Generic;

namespace Algorithms{

    public class HashSetDS{

        public void CreateHashSet(){
            // HashSet usefull when you have to check if value is present or not
            HashSet<string> hashSet = new HashSet<string>();
   
            hashSet.Add("abc123");
            hashSet.Add("bcd145");
            hashSet.Add("xyy652");
            hashSet.Add("xyy652");

            Console.WriteLine("Element bac465 is present in HashSet :"+hashSet.Contains("bac465"));
            Console.WriteLine("Element abc123 is present in HashSet :"+hashSet.Contains("abc123"));
        }        
    }
}