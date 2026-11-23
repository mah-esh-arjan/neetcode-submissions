/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n, left = 1, right = n) {
        let mid = Math.round((left + right) / 2);
        let result = guess(mid);

        if (result === 0) {
            return mid;
        }

        if (result === 1) {
            left = mid + 1;
        }

        if (result === -1) {
            right = mid - 1;
        }

        return this.guessNumber(n, left, right);
    }
}
