function findClosestSum(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b; // Sorting in ascending order
    });

    // Variables to store the closest sum and the indices of the two numbers
    let closestSum = Infinity; // Initialize closest sum with a large value
    let left = 0; // Pointer for the start of the array
    let right = arr.length - 1; // Pointer for the end of the array

    // Step 2: Use two pointers to find the closest sum to zero
    while (left < right) {
        let sum = arr[left] + arr[right];

        // Check if this sum is closer to zero than the previous closest sum
        if (Math.abs(sum) < Math.abs(closestSum)) {
            closestSum = sum; // Update closest sum
        }

        // If the sum is negative, move the left pointer to the right (to increase sum)
        if (sum < 0) {
            left++;
        }
        // If the sum is positive, move the right pointer to the left (to decrease sum)
        else if (sum > 0) {
            right--;
        }
        // If the sum is zero, it's the closest possible sum, so stop
        else {
            break;
        }
    }

    return closestSum; // Return the closest sum to zero
}

// Test cases
console.log(findClosestSum([1, 4, -5, 3, -2, 10, -6, 20])); // Output: 1
console.log(findClosestSum([-5, 5])); // Output: 0
console.log(findClosestSum([5, 8])); // Output: 13
console.log(findClosestSum([-5, -5])); // Output: -10
