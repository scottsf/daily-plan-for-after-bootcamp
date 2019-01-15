// LinkedList

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insertToHead = function(val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
};

LinkedList.prototype.removeFromHead = function() {
  if (!this.head) {
    return 'Linked List is empty';
  } else {
    // if head is not empty then point to the next node
    this.head = this.head.next;
  }
};

LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    // just reusing removeFromHead method if val is is eq to the head
    this.removeFromHead();
  } else {
    let prev = this.head;
    let curr = this.head.next;
    while (curr) {
      if (curr.val === val) {
        // change the pointers when you find the node
        prev.next = curr.next;
        curr = curr.next;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }
};

let ll = new LinkedList();
ll.insertToHead('first');
ll.insertToHead('second');
ll.insertToHead('third');
ll.insertToHead('fourth');
ll.insertToHead('fifth');
ll.removeFromHead();
ll.removeFromHead();
ll.remove('fourth');
