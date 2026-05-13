export function capitalize(words) {
  const cap = words.charAt(0).toUpperCase();
  words = cap + words.substr(1);
  return words;
}

export function reverseString(word) {
  const wordArr = word.split("");
  return wordArr.reverse().toString().replaceAll(",", "");
}

export const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtr(num1, num2) {
    return num1 - num2;
  },
  mult(num1, num2) {
    return num1 * num2;
  },
  div(num1, num2) {
    return num1 / num2;
  },
};
