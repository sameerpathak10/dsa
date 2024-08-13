using System;
using System.Collections.Generic;


namespace Algorithms
{
    public class LinkedListAlogs
    {
        public class Node
        {
            public int data;
            public Node next;
            public Node(int d)
            {
                data = d;
            }
        }
        public class CustomLinkedList
        {
            public Node head;
        }

        public void DisplayContents(Node head)
        {
            
            Node current = head;
            while (current != null)
            {
                Console.Write(current.data + "-->");
                current = current.next;
            }
            Console.WriteLine("");
        }

        public void FindKthElement(Node head, int k)
        {
            int i = 1;
            Node current = head;
            while (current != null)
            {
                if (i == k)
                {
                    Console.WriteLine("");
                    Console.WriteLine($"{k}th Element:" + current.data);
                    break;
                }
                current = current.next;
                i++;
            }
        }

        public void DeleteListHalf(Node head)
        {
            Node fast = head;
            Node slow = head;
            Node prev = null;
            while (fast != null)
            {
                prev = slow;
                slow = slow.next;
                fast = fast.next.next;
            }
            prev.next = null;

        }

        public  void DeleteKthElementFromEnd(Node head, int k)
        {
            if(head == null || k ==0)
                return;
                
            Node first = head;
            Node second = head;

            for(int i=0; i<k;i++){
                second = second.next;
                Console.WriteLine($"i : {i} Second data: {second.data}");
                if(second.next == null){
                    Console.WriteLine($"Second data: {second.data} i: {i} k : {k}");
                   
                    if(i==k-1){                        
                        // if k > length of list
                        head.next = head.next.next;
                    }
                    if(i==k-2){                        
                        head = first.next;
                    }
                    return;
                }
            }

            while(second.next !=null){
                first = first.next;
                second= second.next;
            }

            first.next = first.next.next;
        }

        public void CheckCycleList(Node head){
            
            HashSet<int> hs = new HashSet<int>();
            Node current = head;
            int i=1;
            while(current !=null){
                 Console.Write(current.data+"-->");
                if(hs.Contains(current.data)){
                    Console.WriteLine("");
                    Console.WriteLine("Cycle Found at :"+ current.data);
                    break;
                }
               
                hs.Add(current.data);                
                current = current.next;
                i++;
            }

        }
        public void CreateLinkedList()
        {

            CustomLinkedList lnkdlst = new CustomLinkedList();
            List<Node> nodes = new List<Node>(){
                    new Node(1),
                    new Node(2),
                    new Node(3),
                    new Node(4),
                    new Node(5)
                };

            lnkdlst.head = new Node(0);
            Node current = lnkdlst.head;
            foreach (var node in nodes)
            {
                current.next = node;
                current = current.next;
            }
            /*    
            DisplayContents(lnkdlst.head);
            //FindKthElement(lnkdlst.head, 6);
            DeleteListHalf(lnkdlst.head);
            DisplayContents(lnkdlst.head);
            DeleteKthElementFromEnd(lnkdlst.head,6);
            DisplayContents(lnkdlst.head);

            */
            CustomLinkedList cycleList = new CustomLinkedList();
            Node firstNode = new Node(1);
            Node secondNode = new Node(2);
            Node thirdNode = new Node(3);
            Node forthNode = new Node(4);

            cycleList.head = firstNode;
            firstNode.next = secondNode;
            secondNode.next = thirdNode;
            thirdNode.next = forthNode;

            thirdNode.next = firstNode;

            CheckCycleList(cycleList.head);
            CheckCycleList(lnkdlst.head);
            
        }
    }
}