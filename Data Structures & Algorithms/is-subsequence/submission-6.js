class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let position = 0



        for (let i = 0; i < s.length; i++) {
            if(position >= t.length){
                return false;
            }
            for (let j = position; j < t.length; j++) {
                if (s[i] === t[j]) {
                    position = j + 1;
                    break;
                }
                if (j === t.length - 1) {
                    return false;
                }

            }

        }
        return true;
    }

}
