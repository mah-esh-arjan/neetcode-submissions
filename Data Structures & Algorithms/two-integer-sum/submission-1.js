class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = i;
        }

        for (let j = 0; j < nums.length; j++) {
            let value = target - nums[j] 
            if (map[value] && j !== map[value]) {
                return [j, map[value]];
            }
        }

        return false;
    }
}
