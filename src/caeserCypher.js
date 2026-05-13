function shiftChar(letter, num) {
  let base = 97; // 97 - 122 for lowercase

  if (letter === letter.toUpperCase()) {
    base = 65; // 65 - 90 for uppercase
  }

  let l = letter.charCodeAt(0);

  l += num;

  let position = (l - base) % 26;

  return String.fromCharCode(position + base);
}

export function encryptWord(word, offset) {
  let wordArr = [...word];
  let code = wordArr.map((letter) => shiftChar(letter, offset));

  return code.join("");
}

export function decryptWord(word, offset) {
  let wordArr = [...word];
  let code = wordArr.map((letter) => shiftChar(letter, 26 - offset));
  return code.join("");
}
