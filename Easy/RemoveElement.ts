// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

//Return k.

function removeElement(nums: number[], val: number): number {
  while (nums.includes(val) === true) {
    const indexToRemove = nums.findIndex((xyz) => xyz === val);
    nums.splice(indexToRemove, 1);
  }
  return nums.length;
}

const numsInput: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
const valInput = 2;

removeElement(numsInput, valInput);
