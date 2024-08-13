using System;
using System.Collections.Generic;

namespace Algorithms
{

    public class StackAlgos
    {

        public void FindNextGreaterElement(int[] arr)
        {
            //if no data in array
            if(arr.Length <=0)
                return;
            
            Stack<int> stack = new Stack<int>();
            //push first element
            stack.Push(arr[0]);

            for(int i=1; i<arr.Length;i++){
                int next = arr[i];
                if( stack.Count >0){
                    int popped = stack.Pop();

                    while(popped<next){
                        //Greater Element found for popped
                        Console.WriteLine(popped+"---->"+ next);
                        if(stack.Count ==0)
                            break;
                        // Start seaching for next element in stack
                        popped = stack.Pop();
                    }
                    if(popped> next){
                        //if popped is greater than next then push back to ck to stack
                        stack.Push(popped);
                    }
                }
                //Push next element from array to stack
                stack.Push(next);
            }
            //For elements who greater element not found
            while(stack.Count>0){
                Console.WriteLine(stack.Pop()+"---> -1");
            }

        }

        public void SendInput(){

            int[] arr1 = new int[] {15,8,4,10};
            int[] arr2 = new int[] {2};
            int[] arr3 = new int[] {2,3};

            FindNextGreaterElement(arr1);
            FindNextGreaterElement(arr2);
            FindNextGreaterElement(arr3);
        }
       
    }
}