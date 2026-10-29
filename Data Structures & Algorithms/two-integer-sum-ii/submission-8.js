class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[left] + numbers[right] === target) {
                if (numbers[left] === numbers[right]) {
                    return [left + 1, left + 2];
                }

                return [left +1, right +1];
            }

            if (numbers[left] + numbers[right] > target) {
                right = right - 1;

            }
            else {
                left = left + 1

            }

        }
        return [left, right, 'false'];
    }
}
