function isPalindrome(word) {
  // reverse the word and compare it to the original word
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/*
  Pseudocode:
  1. Split the input word into individual characters and store them in an array.
  2. Reverse the order of the characters in the array.
  3. Join the characters back together into a single string.
  4. Compare the reversed string to the original string.
  5. Return true if they are the same, false otherwise.
*/

/*
  Explanation:
  This algorithm uses the built-in string method 'split' to convert the input word into an array of individual characters. The 'reverse' method is then used to reverse the order of the characters in the array. Finally, the 'join' method is used to convert the reversed array back into a single string. This reversed string is then compared to the original input string, and if they are the same, the function returns true (indicating that the input word is a palindrome). If they are not the same, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

