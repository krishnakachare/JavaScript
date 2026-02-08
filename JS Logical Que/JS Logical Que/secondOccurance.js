function findSecondMin(arr) {
  // Initialize min and secondMin to Infinity
  let min = Infinity;
  let secondMin = Infinity;

  // Loop through the array once
  for (let i = 0; i < arr.length; i++) {
    // Current element
    let current = arr[i];

    // If current is less than min, update secondMin and min
    if (current < min) {
      secondMin = min;
      min = current;
    }
    // Else if current is between min and secondMin, update secondMin
    else if (current > min && current < secondMin) {
      secondMin = current;
    }
  }

  // Return secondMin if found, else return null or appropriate value
  return secondMin === Infinity ? null : secondMin;
}

// Example usage:
console.log(findSecondMin([5, 3, 1, 2, 4])); // Output: 2