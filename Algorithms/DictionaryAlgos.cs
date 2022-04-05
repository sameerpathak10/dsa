using System;
using System.Collections.Generic;

namespace Algorithms{

    public class DictionaryAlgos{

        public void FindCountOfElements(int[] a){

            Dictionary<int,int> dict = new Dictionary<int, int>();

            for(int i=0; i< a.Length; i++){

                if(dict.ContainsKey(a[i])){
                    dict[a[i]] ++; 
                }else{
                    dict.Add(a[i],1);
                }
            }
            foreach(var pair in dict){
                Console.WriteLine(pair.Key+" --> "+ pair.Value);
            }
        }

        public void InputMethod(){

            int[] b= new int[]{1,2,3,4,5,5,3,3,3};
            FindCountOfElements(b);
        }
    }
}