/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

public int MaxProfit(int[] prices)
{
    int maxProfit = prices.Length == 1 ? prices[0] : 0;
    int min = prices[0];

    for (int i = 0; i < prices.Length - 1; i++)
    {
        if (min > prices[i])
        {
            min = prices[i];
        }
        int j = i;
        //Console.WriteLine($"--> j={j} maxProfit={maxProfit} prices[j]={prices[j]} min={min}");
        while (j < prices.Length)
        {
            Console.WriteLine($" j={j} maxProfit={maxProfit} prices[j]={prices[j]} min={min}");
            if (maxProfit < (prices[j] - min))
            {
                maxProfit = prices[j] - min;
            }
            j++;
        }
    }
    Console.WriteLine($" maxProfit: {maxProfit}");
    return maxProfit;

}
public int MaxProfit2(int[] prices)
{
    int maxProfit = 0;
    int min = prices[0];

    for (int i = 0; i < prices.Length - 1; i++)
    {

        if (min > prices[i])
        {
            min = prices[i];
        }
        else if (maxProfit < (prices[i] - min))
        {
            maxProfit = prices[i] - min;
        }

    }
    Console.WriteLine($" maxProfit: {maxProfit}");
    return maxProfit;

}
public int MaxProfit3(int[] prices)
{
    int maxProfit = 0;
    int min = prices[0];

    for (int i = 0; i < prices.Length - 1; i++)
    {
        min = Math.Min(min, prices[i]);
        maxProfit = Math.Max(maxProfit, (prices[i] - min));
    }
    Console.WriteLine($" maxProfit: {maxProfit}");
    return maxProfit;

}

/*
MaxProfit([7, 6, 4, 3, 1]);
MaxProfit([7, 1, 5, 3, 6, 4]);
MaxProfit([2, 4, 1]);
MaxProfit([1, 2]);*/
//MaxProfit3([3, 2, 6, 5, 0, 3]);
MaxProfit3([7,1,5,3,6,4]);