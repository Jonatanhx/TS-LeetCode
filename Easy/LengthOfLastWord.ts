// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal consisting of non-space characters only.

function lengthOfLastWord(s: string): number {
  const xyz = s.split(" ");
  const result = xyz.filter((s) => s != "");
  result.reverse();
  console.log(result);
  return result[0].length;
}

const input = "   fly me   to   the moon  ";

lengthOfLastWord(input);
