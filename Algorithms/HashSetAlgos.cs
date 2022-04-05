using System;
using System.Collections.Generic;

namespace Algorithms{

    public class HashSetAlgos{
        

        public void FindMissingElement(int[] a, int[] b){

            HashSet<int> h = new HashSet<int>();
            foreach(var e in a){
                h.Add(e);
            }

            foreach(var e in b){
                if(!h.Contains(e))
                    Console.Write(e +" ");
            }
        }

        public void InputMethod(){

            int[] a= new int[]{5,4,3,0};
            int[] b= new int[]{1,2,3,4,5,6};

            FindMissingElement(a, b);
        }
    }
}