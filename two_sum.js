var twoSum = function(nums, target) {
    var set = {};
    
    if(target.length < 2) { return null; }
    
    for ( var i = 0; i < nums.length; i++) {
      if (set[nums[i]]) {
        set[nums[i]].push(i);  
      } else {
        set[nums[i]] = [i];
      }
    }
    
    for (var key in set){
      var requiredDifference = target - parseInt(key);
      if (set[requiredDifference]) {
        if (requiredDifference === parseInt(key) && set[key].length > 1){
          return ([set[key][0], set[key][1]]);
        }
        return ([set[key][0], set[requiredDifference][0]]);
      }
    }
    
    return null;
};