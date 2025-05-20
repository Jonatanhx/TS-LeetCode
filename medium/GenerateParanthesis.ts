// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
function generateParanthesis(n: number): string[] {
  const ans: string[] = [];

  function solve(s, open, close) {
    if (close === n && open === n) {
      ans.push(s);
      return;
    }
    if (open < n) {
      solve(s + "(", open + 1, close);
    }

    if (close < open) {
      solve(s + ")", open, close + 1);
    }
  }
  solve("", 0, 0);

  return ans;
}

const input = 3;
generateParanthesis(input);
