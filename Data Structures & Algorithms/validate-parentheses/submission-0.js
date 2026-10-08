class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];

        let map = {
            "{": "}",
            "[": "]",
            "(": ")",

        }

        for (let i = 0; i < s.length; i++) {
            if (s[i] === map[stack.at(-1)]){
                stack.pop();
            }
            else {
                stack.push(s[i])
            }

        }

        return stack.length === 0;

    }
}
