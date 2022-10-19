/**
 * Extra Space
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x) => {
    const arr = Array.from(String(x), Number);/* Space O(N) */

    for (let i = 0; i < arr.length; i++) {    /* Time O(N) */
        const [ left, right ] = [ arr[i], (arr[((arr.length - 1) - i)]) ];
        
        const isEqual = (left === right);
        if (!isEqual) return false;
    }

    return true;
};

/**
 * Reverse Integer Using Modulo
 * Time O(log10(N)) | Space O(1)
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x) => {
    const isEdgeCase1 = (x === 0);
    if (isEdgeCase1) return true;
    
    const isNeagtive = (x < 0);
    const isTen = ((x % 10) === 0);
    
    const isEdgeCase2 = (isNeagtive || isTen);
    if (isEdgeCase2) return false;

    return search(x);/* Time O(log10(N)) */
};

var search = (x, previous = x, temp = 0) => {
    while (temp < x) {/* Time O(log10(N)) */
        const remainder = (x % 10);
        
        previous = x;
        x = Math.floor(x / 10);
        temp = (temp * 10) + remainder;
    }
    
    return (x === temp || previous === temp);
}

/**
 * Reverse Integer Using Modulo
 * Time O(log10(N)) | Space O(1)
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x, inputX = x, revX = 0) => {
    const isEdgeCase = (x < 0);
    if (isEdgeCase) return false;

    const isPositive = () => (0 < x);
    while (isPositive()) {/* Time O(log10(N)) */
        revX += (x % 10);
        x = Math.floor(x / 10);

        if (isPositive()) revX *= 10
    }

    return (revX === inputX);
};
