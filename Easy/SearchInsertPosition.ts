// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums: number[], target: number): number {
  if (nums.includes(target)) {
    console.log("nums contains target", nums.indexOf(target));
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target < nums[i]) {
        return i;
      }
    }

    return nums.length;
  }
}

// const nums = [1001];
const nums = [1, 3, 5, 6];
const target = 7;

searchInsert(nums, target);
