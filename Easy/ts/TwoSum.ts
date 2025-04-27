function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  nums.forEach((item, index) => {
    const firstIndex = target - item;
    for (let i = 0; i < nums.length; i++) {
      if (firstIndex - nums[i] === 0) {
        if (index != i && !result.includes(index) && !result.includes(i)) {
          result.push(index, i);
        }
      }
    }
  });

  console.log(result);
  return result;
}

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);
