class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) { let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); let reverse = ''; for (let i = cleaned.length - 1; i >= 0; i--) { reverse += cleaned[i]; } return cleaned === reverse; }
}
