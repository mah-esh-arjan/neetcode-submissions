class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}

        for (let i = 0; i < nums.length; i++) {

            if (map[nums[i]]) {
                map[nums[i]] += 1;

            }
            else {
                map[nums[i]] = 1
            }
        }
        let sortedMap = Object.entries(map).sort((firstPair, secondPair) => secondPair[1] - firstPair[1])

        let topElement = sortedMap.slice(0, k)

        return topElement.map(item => Number(item[0]));

    }
}
