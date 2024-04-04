/**
 * Find subString
 */

// function findSubStr(str,subStr){
//     // if(str.indexOf(subStr)==-1){
//     //     return "Not a subString"
//     // }
//     // return `${subStr} is the subString of ${str}`

//     return str.includes(subStr) ? true:false
// }

// console.log(findSubStr("tinku","nki"))

/**
 * Check if a string is a palindrome: A palindrome is
 * a word or phrase that reads the same backward as forward.
 *  You can solve this problem by comparing the first and last characters of the string,
 *  then the second and second-to-last characters, and so on.
 */

// const findPand=(str1)=>str1===str1.split("").reverse().join("") ? true:false

// console.log(findPand("tinku","uknin"))

// Two Pointer Approach:

// function isPalindrome(str) {
//   // Handle edge cases (empty string or single character)
//   if (str.length <= 1) {
//     return true;
//   }

//   let left = 0;
//   let right = str.length - 1;

//   // Iterate until left pointer crosses right pointer
//   while (left < right) {
//     // Compare characters (consider case-insensitive comparison if needed)
//     if (str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()) {
//       return false;
//     }
//     // Move pointers inward
//     left++;
//     right--;
//   }

//   // If loop completes, all characters matched - palindrome
//   return true;
// }

// // Example usage
// const str1 = "racecar";
// const str2 = "A man, a plan, a canal: Panama"; // Consider punctuation and spaces

// console.log(isPalindrome(str1)); // Output: true
// console.log(isPalindrome(str2)); // Output: true (ignores punctuation and spaces)

/**
 * Reverse a given string: This problem requires you to create a new string with the characters of
 * the original string in reverse order. You can solve this problem using a loop or recursion.
 */

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    console.log(str, str.charAt(0), str.substr(1));
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("tinku"));
