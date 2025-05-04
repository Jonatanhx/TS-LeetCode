// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     1. Open brackets must be closed by the same type of brackets.
//     2. Open brackets must be closed in the correct order.
//     3. Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
  /* first in first out principle */
  const stack: string[] = [];

  if (s.length % 2 != 0) {
    console.log("input string is uneven");
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    /* Ifall start parantes, lägg in den i stacken */
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    }

    /* Ifall slutparantes, verifiera att sista föremålet i stacken är motsvarande startparantes */
    if (s[i] === ")") {
      if (stack.includes("(") != true) {
        return false;
      }
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }

    if (s[i] === "]") {
      if (stack.includes("[") != true) {
        return false;
      }
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      }
    }

    if (s[i] === "}") {
      if (stack.includes("{") != true) {
        return false;
      }
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      }
    }
  }

  if (stack.length != 0) {
    return false;
  } else {
    return true;
  }
}

const input = "([}}])";
isValid(input);
