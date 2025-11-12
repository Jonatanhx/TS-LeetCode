function moveZeroes(nums: number[]): void {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      counter++;
    }
  }
  for (let i = 0; i < counter; i++) {
    nums.push(0);
  }
}

const input: number[] = [0, 0, 1];
moveZeroes(input);
