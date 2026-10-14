class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let maxCon = 0;
        let tempCon = 0;

        for (let i = 0; i < nums.length; i++) {

            if (nums[i] === 1) {
                tempCon += 1
            }
            else {
                tempCon = 0
            }

            if (maxCon < tempCon) {
                maxCon = tempCon;
            }

        }

        return maxCon;

    }
}
