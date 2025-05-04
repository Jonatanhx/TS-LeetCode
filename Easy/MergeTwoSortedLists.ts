class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const listOne = new ListNode(1);
listOne.next = new ListNode(2);
listOne.next.next = new ListNode(4);

const listTwo = new ListNode(1);
listTwo.next = new ListNode(3);
listTwo.next.next = new ListNode(4);

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const numberArray: number[] = [];
  let current = list1;
  while (current !== null) {
    numberArray.push(current.val);
    current = current.next;
  }

  current = list2;

  while (current !== null) {
    numberArray.push(current.val);
    current = current.next;
  }

  numberArray.sort((a, b) => a - b);
  let dummy = new ListNode(0);
  let tail = dummy;

  numberArray.forEach((value) => {
    tail.next = new ListNode(value);
    tail = tail.next;
  });

  console.log(numberArray);
  return dummy.next;
}

const mergedList = mergeTwoLists(listOne, listTwo);
