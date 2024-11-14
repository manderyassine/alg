function findLongestSubstringWithKUniqueChars(s, k) {
    // Check if there are enough unique characters in the string
    const uniqueChars = new Set(s);
    if (uniqueChars.size < k) {
        return `Not enough unique characters are present in the input string.`;
    }

    // Initialize variables for sliding window approach
    const charFrequency = {}; // Using an object to track character frequency
    let left = 0;
    let maxSubstring = "";
    
    // Iterate over the string with a sliding window
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;

        // Shrink the window if unique characters exceed `k`
        while (Object.keys(charFrequency).length > k) {
            const leftChar = s[left];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            left++;
        }

        // Update the maximum length substring when we have `k` unique characters
        if (Object.keys(charFrequency).length === k) {
            const currentSubstring = s.slice(left, right + 1);
            if (currentSubstring.length > maxSubstring.length) {
                maxSubstring = currentSubstring;
            }
        }
    }

    return `Longest substring with ${k} unique characters is: '${maxSubstring}' with length ${maxSubstring.length}`;
}

// Test cases
console.log(findLongestSubstringWithKUniqueChars("aabbaacdeeeeddded", 3));
console.log(findLongestSubstringWithKUniqueChars("abcddefabc", 4));
console.log(findLongestSubstringWithKUniqueChars("aaaabbbb", 4));
