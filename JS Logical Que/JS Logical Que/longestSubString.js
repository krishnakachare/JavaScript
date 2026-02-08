/* 
✅ 13. Longest Substring Without Repeating Characters
🔹 Example:

"abcabcbb" → Output: 3 ("abc")
*/
function longestUniqueSubstring(str) {
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        let sub = "";
        for (let j = i; j < str.length; j++) {
            if (sub.includes(str[j])) break;
            sub += str[j];
            max = Math.max(max, sub.length);
        }
    }
    return max;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3




/* ✅ 14. Longest Palindromic Substring
🔹 Example:

"babad" → Output: "bab" or "aba"
 */

function longestPalindrome(str) {
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let sub = str.slice(i, j);
            let reversed = sub.split("").reverse().join("");
            if (sub === reversed && sub.length > longest.length) {
                longest = sub;
            }
        }
    }
    return longest;
}

console.log(longestPalindrome("babad"));
