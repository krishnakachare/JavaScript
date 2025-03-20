function printAlphabetStarPattern(alphabet) {
  // Convert the alphabet to uppercase to handle both cases (lowercase or uppercase)
  alphabet = alphabet.toUpperCase();

  // Define star patterns for each alphabet letter
  const patterns = {
    A: ["  *  ", " * * ", "*****", "*   *", "*   *"],
    B: ["**** ", "*   *", "**** ", "*   *", "**** "],
    C: [" *** ", "*   *", "*    ", "*   *", " *** "],
    D: ["**** ", "*   *", "*   *", "*   *", "**** "],
    E: ["*****", "*    ", "*****", "*    ", "*****"],
    F: ["*****", "*    ", "*****", "*    ", "*    "],
    G: [" *** ", "*    ", "*  **", "*   *", " *** "],
    H: ["*   *", "*   *", "*****", "*   *", "*   *"],
    I: ["*****", "  *  ", "  *  ", "  *  ", "*****"],
    J: ["*****", "   * ", "   * ", "*  * ", " **  "],
    K: ["*   *", "* *  ", "**   ", "* *  ", "*   *"],
    L: ["*    ", "*    ", "*    ", "*    ", "*****"],
    M: ["*   *", "** **", "* * *", "*   *", "*   *"],
    N: ["*   *", "**  *", "* * *", "*  **", "*   *"],
    O: [" *** ", "*   *", "*   *", "*   *", " *** "],
    P: ["**** ", "*   *", "**** ", "*    ", "*    "],
    Q: [" *** ", "*   *", "* * *", "*  * ", " ** *"],
    R: ["**** ", "*   *", "**** ", "* *  ", "*  **"],
    S: [" *** ", "*    ", " *** ", "    *", " *** "],
    T: ["*****", "  *  ", "  *  ", "  *  ", "  *  "],
    U: ["*   *", "*   *", "*   *", "*   *", " *** "],
    V: ["*   *", "*   *", "*   *", " * * ", "  *  "],
    W: ["*   *", "*   *", "* * *", "** **", "*   *"],
    X: ["*   *", " * * ", "  *  ", " * * ", "*   *"],
    Y: ["*   *", " * * ", "  *  ", "  *  ", "  *  "],
    Z: ["*****", "   * ", "  *  ", " *   ", "*****"]
  };

  // Get the pattern for the specified alphabet letter
  const pattern = patterns[alphabet];

  // Print the pattern
  if (pattern) {
    pattern.forEach(row => console.log(row));
  } else {
    console.log(`Pattern not available for '${alphabet}'.`);
  }
}

// Example usage:
// Prompt the user to enter an alphabet and display the corresponding star pattern
//   const inputAlphabet = prompt("Enter an English alphabet character:");
//   printAlphabetStarPattern(inputAlphabet);
// printAlphabetStarPattern("B");


let arr = prompt("Enter string...")//.split('')

for (let val of arr) {
  printAlphabetStarPattern(val);
}
