class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let ans = new Array(arr.length).fill(-1);

        for (let i = 0; i < arr.length; i++) {
            let greatest = -1
            for(let j= i +1 ; j <arr.length; j++){
                if( arr[j] > greatest ){
                    greatest = arr[j]
                }
            }
            ans[i] = greatest;
        }

        return ans;


    }
}
