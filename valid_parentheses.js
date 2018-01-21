
/**
* VALID PARENTHESES
* Given a string containing just the characters 
* '(', ')', '{', '}', '[' and ']', determine if the 
* input string is valid.
*
* The brackets must close in the correct order, 
* "()" and "()[]{}" are all valid but "(]" and "([)]" 
* are not.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let close = ')}]';
    let key = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    let stack = [];
    
    if (s.length === 0) return true;
    if (s.length%2) return false;
    
    //inspect string back to front
    for(var i = s.length - 1; i > -1; i--){
        currentBracket = s[i];
        
        //check if it is a closing bracket
        if(close.indexOf(currentBracket) !== -1){
          //put it in the front of the array
          stack.unshift(currentBracket);
          continue;
        }
        
        //if open bracket check to see if next item in stack is closed bracket
        if (stack[0] === key[currentBracket]){
            stack.shift();
        } else {
            return false;
        }
    }
    
    //if there is nothing in the stack return true
    if(stack.length === 0){
        return true;
    } else {
        return false;
    }
};