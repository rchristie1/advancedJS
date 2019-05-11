//Question
//Given an array = [2,5,1,2,3,5,1,2,4]: return the first duplicate instance

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5]

function findDuplicates(arr) {
  let cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (cache.hasOwnProperty(arr[i])) { //or (arr[i] in cache)
      console.log(`The first repeat is "${arr[i]}" `)
      return arr[i];
    }
    console.log(`Adding ${arr[i]} to cache`);
    
    cache[arr[i]] = arr[i];
  }
}

findDuplicates(array2);