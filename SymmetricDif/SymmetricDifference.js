function sym() {
  // Slice all argumenst into a single array
  const argsArray = [].slice.call(arguments);

  // Callback function to iterate through multiple arrays for reduce
  function symDiff(arr1, arr2) {
    // Create array to store unique values
    const unquieVals = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0 && unquieVals.indexOf(arr1[i]) < 0) {
        unquieVals.push(arr1[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) < 0 && unquieVals.indexOf(arr2[i]) < 0) {
        unquieVals.push(arr2[i]);
      }
    }
    return unquieVals;
  }
  return argsArray.reduce(symDiff);
}

//ES6 syntax
function symES6() {
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));

  const result = [...arguments].map(arr => new Set(arr)).reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  return result;
}



console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

console.log(symES6([1, 2, 3], [5, 2, 1, 4]));
console.log(symES6([1, 2, 5], [2, 3, 5], [3, 4, 5]));
