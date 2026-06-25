

function Player(name, marker) {
    return {
        name,
        marker
    };
}


const Gameboard = (() => {

    let board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const getBoard = () => board;

    const placeMark = (index, marker) => {

        if (board[index] !== "") return false;

        board[index] = marker;

        return true;
    };

    const resetBoard = () => {

        board = [
            "", "", "",
            "", "", "",
            "", "", ""
        ];

    };

    return {
        getBoard,
        placeMark,
        resetBoard
    };

})();



const GameController = (() => {

    let player1;
    let player2;

    let currentPlayer;

    let gameOver = false;

    const startGame = (
        playerOneName = "Player 1",
        playerTwoName = "Player 2"
    ) => {

        player1 = Player(playerOneName, "X");
        player2 = Player(playerTwoName, "O");

        currentPlayer = player1;

        gameOver = false;

        Gameboard.resetBoard();

        DisplayController.render();

        DisplayController.updateMessage(
            `${currentPlayer.name}'s turn`
        );
    };

    const winningCombinations = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    const checkWinner = () => {

        const board = Gameboard.getBoard();

        for (const combo of winningCombinations) {

            const [a,b,c] = combo;

            if (
                board[a] &&
                board[a] === board[b] &&
                board[b] === board[c]
            ) {

                return true;
            }
        }

        return false;
    };

    const checkTie = () => {

        return Gameboard
            .getBoard()
            .every(cell => cell !== "");
    };

    const playRound = (index) => {

        if (gameOver) return;

        const successfulMove =
            Gameboard.placeMark(
                index,
                currentPlayer.marker
            );

        if (!successfulMove) return;

        DisplayController.render();

        if (checkWinner()) {

            DisplayController.updateMessage(
                `${currentPlayer.name} Wins!`
            );

            gameOver = true;

            return;
        }

        if (checkTie()) {

            DisplayController.updateMessage(
                "It's a Tie!"
            );

            gameOver = true;

            return;
        }

        currentPlayer =
            currentPlayer === player1
                ? player2
                : player1;

        DisplayController.updateMessage(
            `${currentPlayer.name}'s turn`
        );
    };

    return {
        startGame,
        playRound
    };

})();



const DisplayController = (() => {

    const boardContainer =
        document.getElementById("board");

    const message =
        document.getElementById("message");

    const render = () => {

        boardContainer.innerHTML = "";

        Gameboard.getBoard().forEach(
            (cell, index) => {

                const square =
                    document.createElement("div");

                square.classList.add("cell");

                square.textContent = cell;

                square.addEventListener(
                    "click",
                    () => {
                        GameController.playRound(
                            index
                        );
                    }
                );

                boardContainer.appendChild(
                    square
                );
            }
        );
    };

    const updateMessage = text => {
        message.textContent = text;
    };

    return {
        render,
        updateMessage
    };

})();



const startBtn =
document.getElementById("start-btn");

const restartBtn =
document.getElementById("restart-btn");

startBtn.addEventListener("click", () => {

    const player1Name =
        document.getElementById("player1")
            .value || "Player 1";

    const player2Name =
        document.getElementById("player2")
            .value || "Player 2";

    GameController.startGame(
        player1Name,
        player2Name
    );

});

restartBtn.addEventListener("click", () => {

    const player1Name =
        document.getElementById("player1")
            .value || "Player 1";

    const player2Name =
        document.getElementById("player2")
            .value || "Player 2";

    GameController.startGame(
        player1Name,
        player2Name
    );

});



DisplayController.render();