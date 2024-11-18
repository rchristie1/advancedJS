/*
'''
Reversi Move Validator

Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each disc has
two sides, black and white, and after being placed, further moves cause other discs to flip colors. 
Specifically, a line of discs of one color gets flipped when surrounded on both ends by discs of the opposite color.

anytime a disc is placed, check column and row to see if flippable

In this problem, you're given a 2-dimensional array representing the board. Each position will
contain a value of “B” for black, “W” for white, or “*” to represent an empty spot. Additionally, 
we get a position that is currently empty.

Our task: If it's black's turn to play, our task is to determine if this is a legal move.

A move must meet all of the following criteria:
1. It must have at least one adjacent piece of the opposite color. (Diagonals count)
2. At the far end of a straight line series of opposite color pieces, there must be another matching color piece. 

A simple, 1-dimensional example consider:

* W W W B * * * 

In this case, only the first position is a valid move for black to play because it would surround 
three white tiles with a black piece at the other end. The remaining positions are invalid moves 
because they would not surround any white tiles.

Similarly, the sixth position would be a valid move for white because it would surround a single black piece.

This is the starting state of the game with black's possible opening moves labeled with an L:

update Ls after every move

  0 1 2 3 4 5 6 7
0 * * * * * * * *
1 * * * * * * * *
2 * * * L B * * *
3 * * L B W * * *
4 * * * W B * * *
5 * * * * * * * *
6 * * * * * * * *
7 * * * * * * * *

The board will always be no more than an 8x8 matrix of these three symbols.

EXAMPLE(S)
isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', 'B', 'W', '*', 'W'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3)
Output:  false
 

FUNCTION SIGNATURE
function isLegalMove(board, r, c)
'''

checkValidMoves function

# row below
(r+1,0)
(r+1,c-1)
(r+1, c+1)

# row above
(r-1,0)
(r-1,c-1)
(r-1, c+1)

#left
(0, c-1)
#right
(0, c+1)

directions = [
(r+1,0), (r+1,c-1), (r+1, c+1), (r-1,0), (r-1,c-1), (r-1, c+1), (0, c-1), (0, c+1)
]

for (dx, dy) in directions:
  if m[dx+r][dy+c] == 'W':
    i = dx+r
    j = dy+c
    while (i < len(m) and j < len(m[0])) and m[i][j] != "*":
      i += dx
      j += dy
    if i < len(m) and j < len(m[0]):
      i -= dx
      j -= dy
    if m[i][j] == 'B':
      return True
return False

def searchLine()


BRAINSTORMING:

*/

function searchArea(m, r, c) {
    // create a list of all possible moves steps around the selected idx
    // top left, top, top right, right, bottom right, bottom, bottom left, left
    const directions = [
        [r - 1, c - 1, 'tl'], [r - 1, c, 't'], [r - 1, c + 1, 'tr'], [r, c + 1, 'r'], [r + 1, c + 1, 'bl'], [r + 1, c, 'b'], [r + 1, c - 1, 'br'], [r, c - 1, 'l']
    ]

    // iterate over each direction to see if any adjacent W's are found
    for (let i = 0; i < directions.length; i++) {
        // for clarity. This is using the rows and cols from the direction list
        const row = directions[i][0]
        const col = directions[i][1]
        const dir = directions[i][2]

        // check the other side of the 'W' to see if it has a 'B',
        if (m[row][col] === 'W') {
            if (dir === 'tl') {
                if (m[row - 1][col - 1] === 'B') return true;
            }
            if (dir === 't') {
                if (m[row - 1][col] === 'B') return true
            }
            if (dir === 'tr') {
                if (m[row - 1][col + 1] === 'B') return true;
            }
            if (dir === 'r') {
                if (m[row][col + 1] === 'B') return true;
            }
            if (dir === 'br') {
                if (m[row + 1][col + 1] === 'B') return true;
            }
            if (dir === 'b') {
                if (m[row + 1][col] === 'B') return true;
            }
            if (dir === 'bl') {
                if (m[row + 1][col - 1] === 'B') return true;
            }
            if (dir === 'l') {
                if (m[row][col - 1] === 'B') return true;
            }
        }
    }

    return false
}

function isLegalMove(board, r, c) {
    // Check if the idx of r, c is valid
    if (!board[r][c]) return false

    // go to that idx and check the spaces around it for a W
    return searchArea(board, r, c)
}

console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*'],
        ['*', 'B', 'W', '*', 'W'],
        ['*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*'],
    ],
    2, 3
)) // true

console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*'],
        ['*', '*', 'W', '*', '*'],
        ['*', '*', '*', '*', '*'],
        ['*', '*', 'W', '*', '*'],
        ['*', 'W', '*', '*', '*'],
    ],
    2, 3
)) // false