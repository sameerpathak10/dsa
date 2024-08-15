using System;

class Program{
    public void Main(){

        //Array Declaration
        int[] arr = new int[5]{1,2,4,5,6};

        int[] arr1;       
        arr1 = new int[]{1,2,3,4,5};

        int[] arr2 = new int[5];
        //arr2={1,2,3,4,5};            // Complilation Error

        int[] arr3 = {1,3,4,5,6};

        // error : wrong initialization of an array
        //string[] str1;
        //str1 = {“Element 1”, “Element 2”, “Element 3”, “Element 4” };
        string[] str2 = new string[5];
        str2=new string[]{"e1", "e2","e3","e4","e5"};

        //Run time error
        //string[] str3 = new string[];
        //int[] arr4 =new int[];


        //two dimentional array
        int[,] multiArr = new int[4,2];

        //three dimentional array
        int[,,] multiArr2 = new int [2,2,2];

            //Two Dimentional Array

        int[,] intArray =new int[,]{{1,2},{2,3},{3,4}};
        int[,] arr1 =new int[4,2]{{1,2},{2,3},{3,4},{4,5}};

        int[,] arr2 = new int[2,4]{{1,2,3,4},{5,6,7,8}};

        //int[,] arr5 = new int[4,2]{{1,2},{5,6,7,8}};
        Console.WriteLine(arr1.GetLength(1));
        for(int i=0;i<arr1.GetLength(0);i++){
            for(int j=0;j<arr1.GetLength(1)-1;j++){
                Console.WriteLine($"Arr: {arr1[i,j]} {arr1[i,j+1]}");
            }
        }
    }
}

