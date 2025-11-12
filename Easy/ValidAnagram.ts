function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
}

const i1 = "anagram";
const i2 = "nagaram";

isAnagram(i1, i2);

function xyz() {
  const arr: number[] = [99, 1, 104, 22, 2, 3, 4, 5];
  const arr2: string[] = ["t", "v", "a", "x", "z"];
  console.log(arr2.sort());
}
xyz();
