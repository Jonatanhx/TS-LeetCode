// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const nums = [1, 3, 5, 6];
const target = 2;

function searchInsert(nums: number[], target: number): number {
  const middle = Math.floor(nums.length / 2);
  //check middle value
  if (nums[middle] == target) {
    return middle;
  }

  const left = nums.slice(0, nums.length / 2);
  const right = nums.slice(nums.length / 2);
  //Check left array
  for (let i = 0; i < left.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  //Check right array
  for (let i = 0; i < right.length; i++) {
    return i;
  }

  return -1;
}

const result = searchInsert(nums, target);
console.log(result);
