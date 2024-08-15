using System;

namespace Algorithms{
    public class TreeDS{
        
        public class Node{

            public Node left {get; set;}
            public Node right {get;set;}
            public int data{get; set;}
        }
        
        public class BTree{

            public static Node Insert(Node root, int value){

                if(root == null){
                    root = new Node();
                    root.data=value;
                }
                else{

                    if(value<root.data){
                        //insert left side
                        root.left =Insert(root.left,value);
                    } else if(value> root.data){
                        // insert right
                        root.right = Insert(root.right,value);
                    }
                }

                return root;
            }

            public static void InOrder(Node root, int level=0){

                if(root ==null){
                    return;
                }

                for(int i=0; i<level; i++){
                    Console.Write("     ");
                }
                Console.WriteLine(root.data+" ");
                
                InOrder(root.left, level+1);
                InOrder(root.right, level+1) ;
            }
            public static void PreOrder(Node root){

                if(root ==null){
                    return;
                }

                InOrder(root.left);
                Console.Write(root.data+" ");                
                
                InOrder(root.right);
            }
            public static void PostOrder(Node root){

                if(root ==null){
                    return;
                }
                InOrder(root.right);
                Console.Write(root.data+" ");
                
                InOrder(root.left);

            }

            public static void FindElementInTree(Node root, int value){

                if(root== null){
                    Console.WriteLine($"Value {value} not present in a Tree");
                    return;
                }

                if(root.data==value){
                    Console.WriteLine("Value Found: "+value);
                    return;
                }else{
                    if(root.data>value)
                        FindElementInTree(root.left, value);
                    else
                        FindElementInTree(root.right, value);
                }

                
            }
        }

        public void CreateTree(){

            Node rootNode = new Node();
            rootNode.data=5;
            BTree.Insert(rootNode,4);
            BTree.Insert(rootNode,6);
            BTree.Insert(rootNode,7);
            BTree.Insert(rootNode,3);
            BTree.Insert(rootNode,2);
            BTree.Insert(rootNode,1);
            BTree.Insert(rootNode,8);
            BTree.Insert(rootNode,9);

            Console.WriteLine("InOrder");
            BTree.InOrder(rootNode);
            Console.WriteLine(" ");
            Console.WriteLine("PreOrder");
            BTree.PreOrder(rootNode);
            Console.WriteLine(" ");
            Console.WriteLine("PostOrder");
            BTree.PostOrder(rootNode);
            Console.WriteLine(" ");
            BTree.FindElementInTree(rootNode,10);

        }
    }
}