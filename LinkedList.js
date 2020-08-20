//MERGE LINKED LIST

function Node(val, next) {
  this.val = val;
  this.next = next;
} 

function mergeLinkedLists(L1, L2) {
  
  // create new linked list pointer
  var L3 = new Node(null, null);
  var current = L3;
  
  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.val <= L2.val) { 
      current.next = L1;
      L1 = L1.next;
    } else {
      current.next = L2;
      L2 = L2.next;
    }
    current = current.next;
  }
  
  // once we reach end of a linked list, append the other 
  // list because we know it is already sorted
  if (L1 === null) { current.next = L2; }
  if (L2 === null) { current.next = L1; }
  
  // return the sorted linked list
  console.log(L3)
  return L3.next;
  
}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9 -> 15
var n7 = new Node(15, null);
var n6 = new Node(9, n7);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 

let merged = mergeLinkedLists(L1, L2); 
console.log(merged.val)
console.log(merged.next.val)
console.log(merged.next.next.val)
console.log(merged.next.next.next.val)
console.log(merged.next.next.next.next.val)
console.log(merged.next.next.next.next.next.val)
console.log(merged.next.next.next.next.next.next.val)
console.log(merged.next.next.next.next.next.next.next)





// DOES THE LINKED LIST CONTAIN A LOOP?

const hasCycle = (head) => {
  if(!head) return false;
    
  let slow = head;
  let fast = head;
  
  while(slow.next && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast) return true;
  }
  return false;
}