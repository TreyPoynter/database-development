function isSolved(board) {
    // Check Horizontals : X / O
    if (board[0][0] == 1 && board[0][1] == 1 && board[0][2] == 1 ||
        board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1 ||
        board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1) {
        return 1;
    }
    if (board[0][0] == 2 && board[0][1] == 2 && board[0][2] == 2 ||
        board[1][0] == 2 && board[1][1] == 2 && board[1][2] == 2 ||
        board[2][0] == 2 && board[2][1] == 2 && board[2][2] == 2) {
        return 2;
    }
    // Check Verticals : X / O
    if (board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1 ||
        board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1 ||
        board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1) {
        return 1;
    }
    if (board[0][0] == 2 && board[1][0] == 2 && board[2][0] == 2 ||
        board[0][1] == 2 && board[1][1] == 2 && board[2][1] == 2 ||
        board[0][2] == 2 && board[1][2] == 2 && board[2][2] == 2) {
        return 2;
    }
    // Check Diagonals : X / O
    if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1) {
        return 1;
    }
    if (board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2) {
        return 2;
    }
    // Check if board is finished
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] == 0) {
                return -1;
            }
        }
    }
    return 0;
}

const board = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9] ];
const board2 = [[2,1,2],[2,1,1],[1,2,1]];

isSolved(board2)

console.log(board2[2][2])