//Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var total = [];
    var remainder = 0;
    var addedTogether;
    
    while (l1 !== null || l2 !== null) {
      if(l1 !== null && l2 !== null) {
          //add together
          addedTogether = l1.val + l2.val + remainder;
          //calculate remainder
          if (addedTogether > 9) {
              remainder = 1;
              addedTogether = addedTogether - 10;
          } else {
              remainder = 0;
          }
          //put into total
          total.push(addedTogether);
          //next node
          l1 = l1.next;
          l2 = l2.next;
      }
       if(l1 === null && l2 !== null){
          //calculate remainder
          let temp = l2.val + remainder
          if (temp > 9) {
              remainder = 1;
              temp = temp - 10;
          } else {
              remainder = 0;
          }
           total.push(temp);
           l2 = l2.next;
       }
       if(l1 !== null && l2 === null){
           console.log(l1.val);
          //calculate remainder
          let temp = l1.val + remainder
          if (temp > 9) {
              remainder = 1;
              temp = temp - 10;
          } else {
              remainder = 0;
          }
           total.push(temp);
           l1 = l1.next;
       }
      }
    if(remainder !== 0) total.push(remainder);
    return total;
};