/*

There are N people in a room and M pieces of cake.

Every piece of cake is rectangular, the same width and height but varying lengths.

We can cut any piece of cake into any number of integer length slices.

We want to give the same size slice of cake to every person,

and this slice should be as large as possible.

Return the largest possible slice length!

n = 1
cake = [1, 10, 20]
=> 20

n = 2
cake = [2, 10]

=> 5

n = 2
cake = [9, 10] => [9, 9, 1]

n = 4
cake = [9, 10, 1, 1, 1]
=>    4
               ^
        4/4
            Max(4, 9)
=> 9
cake = [10, 1,1,1,1,1,1,1,1,1,1,1]

n = 3
cake = [10]
=> 3?

n = 2
cake = [10, 10]
=> 10


NOT ALLOWED:
n = 5
cake = [4]
=> 0



Given all of the above, and a number X

Determine whether we can give everyone a slice of length X!

canGetXSlicesFor n
  for each cake in cakes
    integer divide cake by X
    reduce n by the result
      if n becomes 0 return true
  return false



n = 4
cake = [9, 10, 1, 1, 1]
=>    4
lower = 1 upper = find the upper_bound by doing max(cake)

highest_piece = 0 //tracks our highest seen piece
while low <= high:
    find the midpoint
    if canGetXSlice(mid):
       highest_piece = mid
       low = mid + 1
    else:
       high = mid - 1


return highest_piece
*/

function canGetNSlices(n, mid, cake) {
  for(const slice of cake) {
    const result = Math.floor(slice / mid)
    n-=result
    if(n <= 0) {
      return true
    }
  }

  return false
}

function getLargestSlice(arr, n) {
  let largerstNumber = Math.max(...arr)
  if(n === 1) return largerstNumber;

  let smallestNumber = 1
  
  while(smallestNumber <= largerstNumber) {
    let mid = ((largerstNumber + smallestNumber) / 2)

    const result = canGetNSlices(n, mid, arr)

    if(result) {
      largerstNumber = mid
      smallestNumber = mid + 1
    } else {
      largerstNumber = mid - 1
    }
  }

  return largerstNumber;
}


console.log(getLargestSlice([1, 10, 20, 7], 1)) // 20
console.log(getLargestSlice([1, 10, 20], 2)) // 10
console.log(getLargestSlice([1, 10, 20], 3)) // 10
console.log(getLargestSlice([1, 10, 20], 4)) // 6  -> explanation the largest piece can be 
//broken down but the not added to other pieces 6*3 is 18 and then the 10 can be turned into a 6
// getLargestSlice([1, 10, 99, 7], 1)

// function canGetXSlices(n, x, cakes) {
//     cakes.forEach(cake => {
//       const result = Math.floor(cake / x)
//       n -= result
//       if (n <= 0) {
//         return true
//       }
//     })
//     return false
//   }
  
//   function cutTheCakes(n, cakes) {
//     let low = 1
//     let high = Math.max(...cakes)
//     let highestPiece = -Infinity
//     while (low <= high) {
//       const mid = Math.floor((low + high) / 2)
//       const result = canGetXSlices(n, mid, cakes)
//       if (result) {
//         highestPiece = mid
//         low = mid + 1      
//       } else {
//         high = mid - 1
//       }
//     }
//     return highestPiece
//   }