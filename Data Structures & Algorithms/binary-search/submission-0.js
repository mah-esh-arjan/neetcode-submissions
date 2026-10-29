class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let index = -1;
        for(let i = 0 ; i< nums.length; i ++){

            if(target === nums[i]){
                index = i;
            }

        }
        return index;
    }
}
