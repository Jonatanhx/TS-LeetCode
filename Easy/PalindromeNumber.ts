function isPalindrome(x: number): boolean {
  const stringifiedInput = x.toString();
  const inputLen = stringifiedInput.length;

  const startChar = stringifiedInput.charAt(0);
  const endChar = stringifiedInput.charAt(inputLen - 1);

  const isEven = inputLen % 2 == 0;

  if (x < 0) {
    return false;
  }

  if (startChar != endChar) {
    return false;
  }

  if (!isEven) {
    const half = inputLen / 2;
    const middleNumber = Math.ceil(half);

    const firstHalf = stringifiedInput.slice(0, middleNumber - 1);
    const secondHalf = stringifiedInput.slice(middleNumber, inputLen);

    const secondHalfLen = secondHalf.length;

    let reversedHalf = "";
    for (let i = secondHalfLen; i >= 0; i--) {
      reversedHalf = reversedHalf + secondHalf.charAt(i);
    }

    if (firstHalf != reversedHalf) {
      return false;
    }

    return true;
  } else {
    const firstHalf = stringifiedInput.slice(0, inputLen / 2);
    const secondHalf = stringifiedInput.slice(inputLen / 2, inputLen);
    const secondHalfLen = secondHalf.length;

    let reversedHalf = "";
    for (let i = secondHalfLen; i >= 0; i--) {
      reversedHalf = reversedHalf + secondHalf.charAt(i);
    }

    if (firstHalf != reversedHalf) {
      return false;
    }

    return true;
  }
}

const input = 1441;
isPalindrome(input);
