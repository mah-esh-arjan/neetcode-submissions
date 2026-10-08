class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {

        let stack = []

        for (let i = 0; i < operations.length; i++) {

            switch (operations[i]) {

                case "+":
                    let value = Number(stack.at(-1)) + Number(stack.at(-2));
                    stack.push(value);
                    break;

                case "C":
                    stack.pop();
                    break;

                case "D":
                    stack.push(Number(stack.at(-1) * 2))
                    break;

                default:
                    stack.push(Number(operations[i]))

            }


        }

        return stack.reduce((item, acc) => item + acc, 0);
    }
}
