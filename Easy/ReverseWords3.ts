function reverseWords(s: string): string {
  const res: string[] = [];
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    const xxx = words[i].split("").reverse().join("");
    res.push(xxx);
  }
  const result = res.join(" ");
  console.log(result);
  return "";
}

const s = "Let's take LeetCode contest";
// s'teL ekat edoCteeL tsetnoc
reverseWords(s);
