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

function hasCycle(head) {
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


// REVERSE A LINKED LIST  //O(n) is time becasue its based on the length of the linked list.. O(1) space is constant because this function doesnt grow..it just goes through the LL

function reverseLinkedList(head) {
	let p1 = null;
	let p2 = head;
	while(p2 !== null){
		const p3 = p2.next;
		p2.next = p1;
		p1 = p2;
		p2 = p3;
	}
	return p1;
}

function Node(val, next){
  this.val = val;
  this.next = next;
}

function mergeLinkedLists(l1, l2, k){
  let l3 = new Node(null, null);
  let current = l3;
  let length = 0;

  
    while(l1 && l2){
      if(l1.val <= l2.val){
        current.next = l1;
        l1 = l1.next;
        length++;
      } else {
        current.next = l2;
        l2 = l2.next;
        length++;
      }
      current = current.next;
    }
  
  
    if(l1 === null){
      current.next = l2;
      length++;
    }
    if(l2 === null){
      current.next = l1;
      length++;
    }
  
//   console.log(trimList(l3.next, 3));   // list is --> null, 1,3,5,6,9,10,15 so we pass in the l3.next which is 1
//   return l3.next
  
  return trimList(l3.next, k)

}


function trimList(listHead, newLength){
  if(newLength === 0) return "New Length cannot be 0";
  let currentNode = listHead;
  let count = 1; // we start this at 1 because we are being fed the first value in the linkedlist 
 
  while(count <= newLength){
    if(count === newLength){
      currentNode.next = null;
      return listHead
    } else {
      count++;
      currentNode = currentNode.next;
    }
  }
  
  return -1
}

function printList(list){
 
  let current = list;
  let str = "";
  while(current){
    str += current.val + " ";
    current = current.next;
  }
  return str
}
