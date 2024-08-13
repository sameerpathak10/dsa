using System;
using System.Collections.Generic;

namespace Algorithms {

    public class StackDS{

        public void CreateStack(){

            Stack<string> stack = new Stack<string>();

            stack.Push("Main");
            stack.Push("ResponseBuilder");
            stack.Push("CallExternalService");
            stack.Pop();
            stack.Push("ParseExternalData");
            stack.Pop();
            stack.Pop();
            stack.Pop();
        }
    }
}