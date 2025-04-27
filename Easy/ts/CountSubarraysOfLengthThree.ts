function countSubarrays(nums: number[]): number {
  let validSubArrays = 0;
  const maxArraySize = nums.length - 1;

  nums.forEach((item, index) => {
    let newArr: number[] = [];
    if (index === maxArraySize) {
      return;
    } else {
      if (index === 0) {
        newArr.push(nums[0], nums[1], nums[2]);
      } else {
        newArr.push(nums[index - 1], nums[index], nums[index + 1]);

        if (newArr[0] + newArr[2] === newArr[1] / 2) {
          validSubArrays++;
        } else {
          return;
        }
      }
    }
  });

  return validSubArrays;
}
