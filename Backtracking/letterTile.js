/**
 * 1079. Letter Tile Possibilities
Medium
Topics
Companies
Hint
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: tiles = "AAABBC"
Output: 188
Example 3:

Input: tiles = "V"
Output: 1
 

Constraints:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.
*/

function numTilePossibilities(tiles) {
    const sequences = new Set()

    function backtrack(sequence, remainingTiles) {
        if(sequence.length > 0) {
            sequences.add(sequence)
        }

        for(let i = 0; i < remainingTiles.length; i++) {
            const updatedSequence = sequence + remainingTiles[i]
            const updatedRemainingTiles = remainingTiles.slice(0, i) + remainingTiles.slice(i + 1);
            console.log(updatedRemainingTiles);
            
            backtrack(updatedSequence, updatedRemainingTiles)
        }
    }

    backtrack("", tiles)
    return sequences.size
}

console.log(numTilePossibilities('AAB'))