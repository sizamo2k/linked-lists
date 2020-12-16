class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear() {
        this.head = null;
    }
// add getFirst() and getLast() here
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head.next.data) //returns 5
console.log(list.size()) //returns 2
console.log(list.getFirst()) //returns a ListNode object
console.log(list.getLast()) //returns a ListNode object