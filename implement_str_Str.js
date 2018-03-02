/**
* Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*
* Example 1
* Input: haystack = "hello", needle = "ll"
* Output: 2
*
* Example 2
* Input: haystack = "aaaaa", needle = "bba"
* Output: -1
*
* Example 3
* This one is tricky
* Input: hatstack = "a", needle = ""
* Output: 0
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {    
    var firstLetterOfNeedle = needle[0];
    
    //edge cases
    if(haystack === needle || needle.length === 0) return 0;

    for (var i = 0; i < haystack.length; i++) {
      if(haystack[i] === firstLetterOfNeedle) {
        var chunckToCheck = haystack.slice(i, i + needle.length);
        if(chunckToCheck === needle){
            return i;
        }
      }
    }
    
    return -1;
};