
// ### anagram Simple definition 👉 **Same letters, different order**

// ### Examples

// * **eat** ↔ **tea** ↔ **ate** ✅
// * **listen** ↔ **silent** ✅
// * **evil** ↔ **vile** ✅

// ### Not anagrams:
// * **eat** ↔ **ear** ❌ (different letters)
// * **eat** ↔ **eats** ❌ (extra letter)

// ---

// ### In programming terms

// Two strings are anagrams if:

// * They have the **same length**
// * They contain the **same characters with the same frequency**

// ---

// ### One-line JavaScript check

// ```js
// const isAnagram = (a, b) =>
//   a.split('').sort().join('') === b.split('').sort().join('')
// ```




// Given an array:

// ```js
// ["eat", "tea", "ate"]
// ```

// These are **anagrams** because they contain the same letters.

// ---

// ## ✅ Best & Common Interview Solution (Sorting)

// ### Logic

// 1. Sort characters of each word
// 2. Use the sorted word as a key
// 3. Group words with the same key

// ### Code

// ```js
// function findAnagrams(words) {
//   const map = {}

//   for (const word of words) {
//     const key = word.split('').sort().join('')
//     map[key] = map[key] ? [...map[key], word] : [word]
//   }

//   return Object.values(map)
// }

// // Example
// console.log(findAnagrams(["eat", "tea", "ate"]))
// ```

// ### Output

// ```js
// [ [ 'eat', 'tea', 'ate' ] ]
// ```

// ---

// ## ✅ Optimized Approach (Character Count – Better for large input)

// ### Code

// ```js
// function findAnagrams(words) {
//   const map = {}

//   for (const word of words) {
//     const count = Array(26).fill(0)

//     for (const char of word) {
//       count[char.charCodeAt(0) - 97]++
//     }

//     const key = count.join('#')
//     map[key] = map[key] ? [...map[key], word] : [word]
//   }

//   return Object.values(map)
// }
// ```

// ✔ Faster than sorting
// ✔ Used in FAANG-style interviews

// ---

// ## 🧠 Complexity

// | Method          | Time           |
// | --------------- | -------------- |
// | Sorting         | O(n × k log k) |
// | Character Count | O(n × k)       |

// Where:

// * `n` = number of words
// * `k` = average word length

// ---

// ## 🎯 Interview Tip (important)

// If interviewer asks:

// > “Why this approach?”

// Say:

// > “I normalize each word into a canonical representation so all anagrams map to the same key.”

// ---

// ## 🔥 Bonus: Case-insensitive

// ```js
// word.toLowerCase().split('').sort().join('')
// ```
