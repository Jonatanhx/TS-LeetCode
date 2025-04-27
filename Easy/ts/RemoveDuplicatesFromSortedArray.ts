const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  console.log(nums.slice(0, i + 1));
  return i + 1;
}

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
