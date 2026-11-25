class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let chunk = ''

        for (let i = 0; i < strs.length; i++) {
            chunk += strs[i].length + "#" + strs[i]
        }
        return chunk;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let start = 0;
        let ans = []

        while (start < str.length) {

            let indice = str.indexOf("#", start);
            let stringStart = indice + 1;
            let stringEnd = stringStart + Number(str.slice(start, indice));

            ans.push(str.slice(stringStart, stringEnd))
            start = stringEnd;

        }

        return ans;


    }
}
