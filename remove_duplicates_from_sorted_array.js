/**
 * @param {number[]} nums
 * @return {number}
 */
let howManyOf = function(numArr, startIndex) {
    var count = 1;
    var countingIndex = startIndex + 1;
    while(numArr[startIndex] === numArr[countingIndex] && countingIndex < numArr.length){
        count++;
        countingIndex++;
    }
    return count;
}

var removeDuplicates = function(nums) {
    //if empty return length
    if (nums.length === 0 ) return 0;
    
    var count = 0;
    var analyzingIndex = 0;
    var numOf = 0;
    
    //analyze each index
    while (analyzingIndex < nums.length) {
      //get the number of times current value exists in array
      numOf = howManyOf(nums, analyzingIndex);
        //if it is a duplicate 
        if (numOf > 1) {
          count++;
          //Set analyzingIndex to the position just after last duplicate
          analyzingIndex = analyzingIndex + numOf;
        //if it is not a duplicate
        } else {
          count++;
          analyzingIndex++;
        }
    }
    
    //return nums.splice(0, count);
    return count;
};