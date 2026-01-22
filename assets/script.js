let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let box = document.querySelectorAll('.box')
let restartButton = document.getElementById("reset")

let grid
let currentPlayer
let gameOver

function init() {
    grid = ['', '', '', '', '', '', '', '', '',]
    currentPlayer = "X"
    gameOver = false

    for (let i = 0; i < box.length; i++) {
        box[i].innerText = ""
    }
}

function clickBox() {
    let idx = this.getAttribute('data-index');

    if (grid[idx] === '' && !gameOver) {
        grid[idx] = currentPlayer
        this.innerText = currentPlayer

        if (checkWin()) {
            alert("Player " + currentPlayer + " WIN!")
            gameOver = true
            return
        }

        if (grid.indexOf("") === -1) {
            alert("Draw!")
            gameOver = true
            return
        }

        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    }
}

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i]
        let a = combo[0]
        let b = combo[1]
        let c = combo[2]

        if (grid[a] === currentPlayer && grid[b] === currentPlayer && grid[c] === currentPlayer) {
            return true
        }
    }

    return false
}

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', clickBox)
}

restartButton.addEventListener("click", init)

init()