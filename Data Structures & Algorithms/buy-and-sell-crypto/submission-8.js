class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let cell = [0, 0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {

            if (prices[i] < prices[cell[0]]) {
                cell[0] = i;
                cell[1] = i;
                continue;
            }
            if (prices[i] > prices[cell[0]]) {
                if (prices[i] > prices[cell[1]]) {
                    cell[1] = i
                }
                let profit = prices[cell[1]] - prices[cell[0]];

                if (profit > maxProfit) {
                    maxProfit = profit;
                }
                continue;
            }


        }


        return maxProfit;

    }
}
