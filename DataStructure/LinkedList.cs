using System;

namespace Algorithms {

    public class LinkedListDS{
        Node head;
        public class Node{
            public int data;
            public Node next;
            public Node(int _data){
                data = _data;
                next = null;
            }// Constructor
        }

        public void printList(){
            Node n = head;
            while(n !=null){
                Console.WriteLine("Node Value:"+n.data);
                n= n.next;
            }
        }
        public void test(){
            LinkedListDS list = new LinkedListDS();
            list.head = new Node(1);
            Node second = new Node(2);
            Node third = new Node(3);

            list.head.next = second;
            list.head.next.next= third;

            list.printList();
        }
    }
}