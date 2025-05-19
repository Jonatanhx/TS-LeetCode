// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

//     A triangle is called equilateral if it has all sides of equal length.
//     A triangle is called isosceles if it has exactly two sides of equal length.
//     A triangle is called scalene if all its sides are of different lengths.

// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.
function triangleType(nums: number[]): string {
  if (nums[0] === nums[1] && nums[0] === nums[2]) {
    console.log("equilateral");
    return "equilateral";
  }
  if (
    nums[0] + nums[1] > nums[2] &&
    nums[1] + nums[2] > nums[0] &&
    nums[0] + nums[2] > nums[1] &&
    nums[0] != nums[1] &&
    nums[1] != nums[2] &&
    nums[0] != nums[2]
  ) {
    console.log("scalene");
    return "scalene";
  }
  if (
    (nums[0] === nums[1] && nums[0] + nums[1] > nums[2]) ||
    (nums[1] === nums[2] && nums[1] + nums[2] > nums[0]) ||
    (nums[0] === nums[2] && nums[0] + nums[2] > nums[1])
  ) {
    console.log("isosceles");
    return "isosceles";
  }
  console.log("none");
  return "none";
}

const input = [9, 4, 9];
triangleType(input);
