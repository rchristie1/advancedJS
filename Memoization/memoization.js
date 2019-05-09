function memoizationAddTo80() {
    let cache = {};
    return function(n) {
      if (n in cache) {
        return cache[n];
      } else {
        console.log('long Time');
        cache[n] = n + 80;
        return cache[n];
      }
    }
  }
  
  const memoized = memoizationAddTo80()
  
  console.log('1', memoized(3))
  console.log('2', memoized(5))
  console.log('3', memoized(3))