class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        let queue = [];

        for (let i = 0; i < nums.length; i++) {
            if (queue.includes(nums[i])) {
                return true;
            }

            queue.push(nums[i]);

            if (queue.length > k) {
                queue.shift();
            }

        }

        return false;

    }
}
