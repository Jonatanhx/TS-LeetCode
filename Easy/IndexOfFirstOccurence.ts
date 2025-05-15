// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
function strStr(haystack: string, needle: string): number {
  const xyz = haystack.includes(needle);
  if (xyz) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
}

const input1 = "sadbutsad";
const input2 = "sad";

strStr(input1, input2);

// If haystack contains needle
//
