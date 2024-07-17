// Helper function to check if two arrays have the same elements, regardless of order
export function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();
  return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}
