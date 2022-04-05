using System;
using System.Collections.Generic;

namespace  Algorithms{

    public class QueueDS{

         public void CreateQueue(){

            Queue<int> queue = new Queue<int>();

            queue.Enqueue(1);
            queue.Enqueue(18);
            queue.Enqueue(20);
            queue.Enqueue(23);

            int removeItem = queue.Dequeue();
            Console.WriteLine(removeItem);

        }
    }
}