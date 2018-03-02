/**
* Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
* return the length of last word in the string.
* If the last word does not exist, return 0.
* Note: A word is defined as a character sequence consists of non-space characters only.
*
* Example
* Input: "Hello World"
* Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(" ");
    var len = arr.length - 1;
    
    for( var i = len ; i >= 0; i--){
      if(arr[i] !== "") {
        return arr[i].length;
      }
    }

    return 0;
    
//   Naive solution
//   if(s === " ") return 0;
    
//   for( var i = s.length - 1; i >= 0; i--){
//     if(s[i] != " "){
//       var lastLetterIndex = i;
//       for(var x = i; x >= 0; x--){
//         if(s[x] === " "){
//             return i - (x);
//         }
//         if(x === 0){
//           return i - x + 1;
//         }
//       }
//     }
    
//     if(i === 0) return 0;
//   }
    
//   if(s.length > 0) return s.length;
    
//   return 0;
};