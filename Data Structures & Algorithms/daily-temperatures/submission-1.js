class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let arr = new Array(temperatures.length).fill(0);
        let stack = []

        for (let i = 0; i < temperatures.length; i++) {

            let current = temperatures[i]

            while (current > temperatures[stack.at(-1)] && stack.length > 0) {
                let previousIndex = stack.pop();

                arr[previousIndex] = i - previousIndex;
            }
            stack.push(i);

        }

        return arr;

    }
}
