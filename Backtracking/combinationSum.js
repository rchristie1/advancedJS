/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations 
that sum up to target is less than 150 combinations for the given input.
*/

function combinationSum(candidates, target) {
  const stack = [];
  const results = [];

  function helper(i, remaining) {
    if (i >= candidates.length) return;

    if (remaining <= 0) {
      if (remaining === 0) {
        results.push([...stack]); // only copies when we need to record a result
      }
      return;
    }

    // Take another of the current value
    stack.push(candidates[i]);
    helper(i, remaining - candidates[i]);
    stack.pop();

    // Don't take any value here, but move on to the next candidate
    helper(i + 1, remaining);
  }

  helper(0, target);

  return results;
}

console.log(combinationSum([2,3,6,7])) //[[2,2,3],[7]]
// console.log(combinationSum([2,3,5], 8)) //[[2,2,2,2],[2,3,3],[3,5]]
// console.log(combinationSum([2], 1)) // -1