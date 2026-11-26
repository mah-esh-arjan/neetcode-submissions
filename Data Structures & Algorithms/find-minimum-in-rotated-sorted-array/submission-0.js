class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let lowest = nums[0];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < lowest) {
                lowest = nums[i];
            }
        }

        return lowest;
    }
}
