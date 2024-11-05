function sum2(arr) {
    if (arr.length === 0) return 0;
    return arr.pop() + sum2(arr)
  }
  
  let array = [3, 1, 2, 3, 1]
  
  // console.log(sum(array))
  console.log(sum2(array))