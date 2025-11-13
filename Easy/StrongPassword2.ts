// A password is said to be strong if it satisfies all the following criteria:

//     It has at least 8 characters.
//     It contains at least one lowercase letter.
//     It contains at least one uppercase letter.
//     It contains at least one digit.
//     It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
//     It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
//     Given a string password, return true if it is a strong password. Otherwise, return false.

function strongPasswordCheckerII(password: string): boolean {
  let containsUppercase = false;
  let containsLowercase = false;
  let containsSymbol = false;
  let containsNumber = false;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabet.split("");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];

  if (password.length < 8) {
    return false;
  }
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
      return false;
    }
  }

  for (let i = 0; i < password.length; i++) {
    const ch = password[i];

    if (letters.includes(ch)) {
      containsLowercase = true;
    }

    if (letters.map((c) => c.toUpperCase()).includes(ch)) {
      containsUppercase = true;
    }

    if (numbers.includes(ch)) {
      containsNumber = true;
    }

    if (symbols.includes(ch)) {
      containsSymbol = true;
    }
  }

  if (
    containsLowercase &&
    containsUppercase &&
    containsNumber &&
    containsSymbol
  ) {
    console.log("Strong password detected");
    return true;
  } else {
    return false;
  }
}

const pass = "IloveLe3tcode!";
//should return true

strongPasswordCheckerII(pass);
