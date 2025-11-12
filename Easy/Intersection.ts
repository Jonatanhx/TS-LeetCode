function intersection(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];

  while (nums1.length != 0) {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] == nums2[j]) {
          if (res.includes(nums1[i])) {
            nums1.splice(i, 1);
          } else {
            console.log(`Deleting: ${nums1[i]}`);
            res.push(nums1[i]);
            nums1.splice(i, 1);
            if (i != 0) {
              i--;
            }
          }
        }
      }
      if (!nums2.includes(nums1[i])) {
        nums1.splice(i, 1);
      }
    }
  }
  return res;
}

const in1 = [2, 1];
const in2 = [1, 2];

intersection(in1, in2);
