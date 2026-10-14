class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {

        let count = 0;

        for(let i = 0 ; i< details.length; i++){

            if(Number(details[i][11] + details[i][12]) > 60){   
                count ++;
            }
            
        }
        
        return count;

    }
}
