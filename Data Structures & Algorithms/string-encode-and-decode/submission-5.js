class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let chunk = "";

        for (let i = 0; i < strs.length; i++) {
            chunk += strs[i].length + "#" + strs[i];
        }
        return chunk;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        let chunk = str;
        let start = 0;
        while ( start < chunk.length) {
            let indice = chunk.indexOf("#", start)

            let length = Number(chunk.slice(start, indice))

            let stringStart = indice + 1

            let stringEnd = stringStart + length

            ans.push(chunk.slice(stringStart, stringEnd));

            start = stringEnd;
        }



        return ans;
    }
}
