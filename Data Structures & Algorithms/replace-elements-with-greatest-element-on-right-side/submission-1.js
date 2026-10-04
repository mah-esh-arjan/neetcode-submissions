class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let ans = new Array(arr.length).fill(0);
        let greatest = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            ans[i] = greatest;

            if (arr[i] > greatest) {

                greatest = arr[i]

            }

        }

        return ans;


    }
}
