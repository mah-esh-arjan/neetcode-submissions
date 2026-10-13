class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count = 0;
        for (let i = 0; i < s.length; i++) {

            if (s[i] !== ' ') {
                count++;
            }
            else {
                if (i < s.length - 1 && s[i + 1] !== ' ') {
                    count = 0
                }
            }


        }
        return count;
    }
}
