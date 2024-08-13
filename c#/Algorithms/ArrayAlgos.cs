using System;

namespace  Algorithms{

    public class ArrayAlgorithms{
        public int[] ReverseArray(int[] input){

            int i=0, j = input.Length-1, temp = input[j];

            while(j>i){
                input[j] =input[j-1];  
                j--;
            }
            input[i] = temp;

            foreach(var a in input){
                Console.Write(a +" ");
            }
            return input;
        }
    }
}