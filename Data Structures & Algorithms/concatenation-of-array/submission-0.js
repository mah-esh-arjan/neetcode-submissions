class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let empty = []

        for(let i = 0 ; i< nums.length; i ++){

            empty.push(nums[i]);
        }

    return [...nums, ...empty]

    }
}
