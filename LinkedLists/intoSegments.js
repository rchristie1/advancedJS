/*
'''
❓ PROMPT
Given the head of a linked list and any number *parts*, partition the list into *parts* 
consecutive segments. No 2 segments should have a size difference >1.

Return an array of *n* of head nodes. The segments should be in the same original order, 
and segments occurring earlier should never be smaller than later segments.

Example(s)
list1 = 1->2->3->4->5->6->7->8->9->10->None
segmentLinkedList(list1,1)
Output:
[
  1->2->3->4->5->6->7->8->9->10->None
]

list2 = 1->2->3->4->5->None
segmentLinkedList(list2, parts=10)
Output:
[
  1->None
  2->None
  3->None
  4->None
  5->None
  []
  []
  []
  []
  []
]

list3 = 1->2->3->4->5->None
segmentLinkedList(list3, parts=2)
Output:
[
  1->2->3->None
  4->5->None
]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT

// converts a list of lists to a string for testing
function toString(arr) {
  if (!arr || arr.length === 0)
    return "[]\n"

  let theString = "[\n"
  for (let head of arr)
    theString += "  " + toStringIndividual(head)
  return theString + "]"
}

// converts a list to a string for testing
function toStringIndividual(head) {
  if (!head || head.length === 0)
    return "[]\n"

  let theString = ""
  while (head) {
    theString += head.val + "->"
    head = head.next
  }
  return theString + "None\n"
}
 
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
    constructor(val=0, next=null) {
      this.val = val
      this.next = next
    }
}

function segmentLinkedList(head, parts) {
    let count = 0
    let curr = head
    let output = []
    // get the length of the LL
    while(curr) {
        count++
        curr = curr.next
    }
    
    /* divide it by the number of parts to find how 
    many parts to put in each part */
    const nodesPerPart = Math.floor(count / parts)
    let remainder = count % parts
    
    curr = head

    while(curr) {
        let curSegLen = 0
        output.push(curr) // add the head of a new segment
        let prev = curr
        
        // append to the current partition segment
        while(curr && curSegLen < nodesPerPart) {
            prev = curr
            curr = curr.next
            curSegLen++
        }

        // use the remainder once each iteration until it's gone
        if(remainder > 0) {
            prev = curr
            curr = curr.next
            remainder--
        }

        prev.next = null
    }

     // there's more partitions than nodes
    while (output.length < parts) {
        output.push([])
    }

    console.log(output);
    

    return output;

    // for (let i = 0; i < parts; i++) {
    //     let currentCount = 1
        
    //     // if there's a leftover value
    //     if(i == 0) {
    //         currentCount -= remainder
    //     }

    //     // if there's no items in the LL then return an empty array object
    //     if(!curr) {
    //         listToPush = []
    //     } else {
    //         console.log("main loop", currentCount);
            
            
    //         while (currentCount < nodesPerPart) {
    //             console.log(currentCount);
    //             if(!listToPush) {
    //                 listToPush = curr
    //             } else {
    //                 let tmpList = listToPush
                    
    //                 while (tmpList.next) {
    //                     tmpList = tmpList.next
    //                 }
    
    //                 tmpList.next = curr
    //             }
    
    //             currentCount++
    //             curr = curr.next
    //         }
    //     }
        
    //     // set the end of the segment to null as per requiremets
    //     if(!Array.isArray(listToPush)) {
    //         listToPush.next = null
    //     }
    //     output.push(listToPush)

    //     // reset the list
    //     listToPush = undefined
    // }
    
    // console.log(output)
    // return output
}


console.log(JSON.stringify(segmentLinkedList(null, 1)) == "[[]]")
console.log(JSON.stringify(segmentLinkedList(null, 2)) == "[[],[]]")

// 1->2->3->4->5->6->7->8->9->10->None
let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8, new Node(9, new Node(10))))))))))
console.log(toString(segmentLinkedList(list1, 1)) == `[
  1->2->3->4->5->6->7->8->9->10->None
]`)